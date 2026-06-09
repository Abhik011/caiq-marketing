import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
try {
const body = await req.json();
const welcomeEmail = (name: string) => `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
</head>

<body
  style="
    margin:0;
    padding:40px 0;
    background:#f8f7fc;
    font-family:Inter,Arial,sans-serif;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
>
<tr>
<td align="center">

<table
  width="680"
  cellpadding="0"
  cellspacing="0"
  style="
    background:#ffffff;
    border:1px solid #ece8ff;
    border-radius:28px;
    overflow:hidden;
    box-shadow:0 20px 60px rgba(0,0,0,0.06);
  "
>

<tr>
<td style="padding:50px;">

<div
  style="
    display:inline-block;
    padding:10px 18px;
    border-radius:999px;
    background:#f5f3ff;
    border:1px solid #ddd6fe;
    color:#7c3aed;
    font-size:12px;
    font-weight:600;
    letter-spacing:.5px;
  "
>
EARLY ACCESS NOW OPEN
</div>

<h1
  style="
    margin:30px 0 0;
    font-size:56px;
    line-height:1.05;
    font-weight:800;
    color:#09090b;
  "
>
The AI Operating System
<br />
<span style="color:#7c3aed;">
for CA Firms
</span>
</h1>

<p
  style="
    margin-top:30px;
    font-size:18px;
    line-height:32px;
    color:#52525b;
  "
>
Hi ${name},
</p>

<p
  style="
    font-size:18px;
    line-height:32px;
    color:#52525b;
  "
>
Thank you for joining the CA-IQ Early Access Program.
Your application has been successfully received.
</p>

<p
  style="
    font-size:18px;
    line-height:32px;
    color:#52525b;
  "
>
You'll be among the first firms to experience
AI-powered compliance automation,
audit workflows and client management.
</p>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  style="
    margin-top:40px;
    background:#faf9ff;
    border:1px solid #ece8ff;
    border-radius:20px;
  "
>

<tr>
<td style="padding:30px;">

<h3
  style="
    margin:0 0 20px;
    font-size:22px;
    color:#09090b;
  "
>
What Happens Next
</h3>

<p style="margin:12px 0;color:#52525b;">
✓ Application Review
</p>

<p style="margin:12px 0;color:#52525b;">
✓ Priority Access
</p>

<p style="margin:12px 0;color:#52525b;">
✓ Product Preview
</p>

<p style="margin:12px 0;color:#52525b;">
✓ Founding Member Benefits
</p>

</td>
</tr>

</table>

<div style="margin-top:40px;">

<a
  href="https://caiq.creonox.com"
  style="
    background:#111111;
    color:white;
    text-decoration:none;
    padding:16px 28px;
    border-radius:14px;
    font-weight:600;
    display:inline-block;
  "
>
Visit CA-IQ →
</a>

</div>

<hr
  style="
    margin:50px 0 30px;
    border:none;
    border-top:1px solid #ececec;
  "
/>

<p
  style="
    color:#71717a;
    font-size:14px;
    line-height:26px;
  "
>
CA-IQ by Creonox Technologies<br/>
AI-Powered Operating System for Chartered Accountant Firms
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
const {
  full_name,
  firm_name,
  email,
  whatsapp,
  firm_size,
  clients_managed,
  software_stack,
  challenge,
} = body;

if (
  !full_name ||
  !firm_name ||
  !email ||
  !whatsapp
) {
  return NextResponse.json(
    {
      success: false,
      error: "Required fields missing",
    },
    {
      status: 400,
    }
  );
}

const { data: existingUser } = await supabase
  .from("waitlist")
  .select("id")
  .eq("email", email)
  .maybeSingle();

if (existingUser) {
  return NextResponse.json(
    {
      success: false,
      error:
        "This email has already joined the waitlist.",
    },
    {
      status: 400,
    }
  );
}

const { error } = await supabase
  .from("waitlist")
  .insert([
    {
      full_name,
      firm_name,
      email,
      whatsapp,
      firm_size,
      clients_managed,
      software_stack,
      challenge,
    },
  ]);

if (error) {
  return NextResponse.json(
    {
      success: false,
      error: error.message,
    },
    {
      status: 400,
    }
  );
}

await resend.emails.send({
  from: "CA-IQ <hello@creonox.com>",
  to: body.email,
  subject: "🚀 Welcome to CA-IQ Early Access",
  html: welcomeEmail(body.full_name),
});

await resend.emails.send({
  from: "CA-IQ <hello@creonox.com>",
  to: process.env.ADMIN_EMAIL!,
  subject: `🔥 New Waitlist Application - ${firm_name}`,
  html: `
    <h2>New CA-IQ Waitlist Application</h2>

    <table border="1" cellpadding="10" cellspacing="0">
      <tr>
        <td><strong>Name</strong></td>
        <td>${full_name}</td>
      </tr>

      <tr>
        <td><strong>Firm Name</strong></td>
        <td>${firm_name}</td>
      </tr>

      <tr>
        <td><strong>Email</strong></td>
        <td>${email}</td>
      </tr>

      <tr>
        <td><strong>WhatsApp</strong></td>
        <td>${whatsapp}</td>
      </tr>

      <tr>
        <td><strong>Firm Size</strong></td>
        <td>${firm_size}</td>
      </tr>

      <tr>
        <td><strong>Clients Managed</strong></td>
        <td>${clients_managed}</td>
      </tr>

      <tr>
        <td><strong>Software Stack</strong></td>
        <td>${software_stack}</td>
      </tr>

      <tr>
        <td><strong>Challenge</strong></td>
        <td>${challenge}</td>
      </tr>
    </table>
  `,
});

return NextResponse.json({
  success: true,
  message:
    "Application submitted successfully",
});


} catch (error: any) {
console.error(error);


return NextResponse.json(
  {
    success: false,
    error: error.message,
  },
  {
    status: 500,
  }
);


}
}

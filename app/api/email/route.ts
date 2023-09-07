import { NextResponse } from 'next/server'
import sgMail from "@sendgrid/mail";
import { EMAIL_TOKEN_SECRET_KEY } from '@/utils/index'
export async function GET() {
    return NextResponse.json({ status: 200, message: "Email sent", data: { send: true } })
}

export async function POST(req: Request) {
    const { fullname, email, phone, subject, message } = await req.json();
    console.log(fullname, email, phone, subject, message)
    sgMail.setApiKey(`${EMAIL_TOKEN_SECRET_KEY}`);
    const msg = {
        to: `zhen.yang.syd@gmail.com`,
        from: "yangzhenuts@gmail.com",
        subject: "Job from zhenyang.com.au",
        html: `
        <div>
        <p>Fullname: ${fullname}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Subject: ${subject}</p>
        <p>Message: ${message}</p>
        </div>
        `,
    };
    const result = await sgMail.send(msg)
    if (result) {
        return NextResponse.json({ success: true, status: 200, message: "Email sent", data: { send: true } })
    } else {
        return NextResponse.json({ success: false, status: 200, message: "Email not sent", data: { send: false } })
    }
}
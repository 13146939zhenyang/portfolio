import { NextResponse } from 'next/server'
import sgMail from "@sendgrid/mail";
import { EMAIL_TOKEN_SECRET_KEY } from '@/utils/index'

export async function POST(req: Request, res: Response) {
    const { fullname, email, phone, subject, message } = await req.json();
    sgMail.setApiKey(`${EMAIL_TOKEN_SECRET_KEY}`);
    const msg = {
        to: `zhen.yang.syd@gmail.com`,
        from: "yangzhenuts@gmail.com",
        subject: "Job from zhenyang.com.au",
        html: ``,
    };
    const result = await sgMail
        .send(msg)
        .then(() => {
            return NextResponse.json({ status: 200, message: "Email sent", data: { send: true } })
        })
}
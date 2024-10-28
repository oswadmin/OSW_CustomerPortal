

import * as nodemailer from 'nodemailer';


interface semdMailProps {
    reciepent: string;
    sender: string;
    emailSubject: string;
    emailBody: string;
}

interface TransportOptions {
    host: string;
    port: number;
    secure: boolean;
    auth: {
        user: string;
        pass: string;
    };
}

export async function sendMail({
    reciepent,
    sender,
    emailSubject,
    emailBody,
}: semdMailProps) {

    const { mail_uid, mail_pwd } = process.env

    const transporter = nodemailer.createTransport({

    })

}
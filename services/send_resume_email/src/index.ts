import SendGridClient from './SendGridClient';
import dotenv from 'dotenv';

function sendResumeEmail(sendGridClient: SendGridClient, to_email: string, from_email: string): void {
	const subject: string = 'My resume';
	const htmlContent: string = '<h1>HERES MY RESUME!</h1>';
	sendGridClient.sendEmail(to_email, from_email, subject, htmlContent);
}

function main() {
	dotenv.config();
	const SENDGRID_API_KEY: string = process.env.SENDGRID_API_KEY!;
	const FROM_EMAIL: string = process.env.FROM_EMAIL!;
	const sendGridClient = new SendGridClient(SENDGRID_API_KEY);
	sendResumeEmail(sendGridClient, 'ajramirez1095@gmail.com', FROM_EMAIL);
}

main();

const sgMail = require('@sendgrid/mail');

class SendGridClient {
	private apiKey: string;

	constructor(apiKey: string) {
		this.apiKey = apiKey;
		sgMail.setApiKey(this.apiKey);
	}

	public sendEmail(to_email: string, from_email: string, subject: string, htmlContent: string) {
		const msg = {
			to: to_email,
			from: from_email,
			subject: subject,
			html: htmlContent
		};
		return sgMail.send(msg);
	}
}

export default SendGridClient;

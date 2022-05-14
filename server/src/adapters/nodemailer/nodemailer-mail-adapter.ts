import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapter"

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "34ad7167453d16",
		pass: "a46e34447bcf2b",
	},
})

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: "Equipe Feedget <oi@feedget.com>",
			to: "Nicolas Müller <nicolasmuller.barros@gmail.com>",
			subject,
			html: body,
		})
	}
}

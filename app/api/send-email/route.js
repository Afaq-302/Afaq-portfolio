// app/api/send-email/route.js
import axios from "axios";

export const POST = async (req) => {
    try {

        const { name, email, subject, message } = await req.json();

        console.log("Form data:", { name, email, subject, message });


        const smtpData = {
            sender: {
                name,
                email,
            },
            to: [
                {
                    email: "ufaq3022@gmail.com",
                    name: "Afaq Ahmad",
                },
            ],
            subject: subject || `New message from ${name}`,
            htmlContent: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
            replyTo: {
                email,
                name,
            },
        };

        await axios.post("https://api.brevo.com/v3/smtp/email", smtpData, {
            headers: {
                "api-key": process.env.BREVO_SMTP_API_KEY,
                "Content-Type": "application/json",
            },
        });

        return new Response(JSON.stringify({ message: "Email sent successfully" }), {
            status: 200,
        });
    } catch (error) {
        console.error("❌ Brevo SMTP error:", error.response?.data || error.message);
        return new Response(
            JSON.stringify({
                message: "Failed to send email",
                error: error.response?.data || error.message,
            }),
            { status: 500 }
        );
    }
};

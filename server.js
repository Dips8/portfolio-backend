const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Create transporter ONCE
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dipakmadwani1234@gmail.com",
    pass: "eurg amfy dmbu ohzg",
  },
});

app.post("/send-mail", async (req, res) => {
  try {
    const { email, payment_id } = req.body;

    const mailOptions = {
      from: "dipakmadwani1234@gmail.com",
      to: "dipakmadwani1234@gmail.com",
      subject: "New Contact Form Message",
      text: `
Email: ${email}
Message: ${payment_id}
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent ✅");
    res.send("Email sent successfully");

  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error sending email");
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
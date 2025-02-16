require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { OAuth2Client } = require('google-auth-library');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
let otpStore = {};

const CLIENT_ID = process.env.CLIENT__ID;

const CLIENT_SECRET = process.env.CLIENT__SECRET;

const client = new OAuth2Client(CLIENT_ID);

app.post('/auth/google-verify', async (req, res) => {
  try {
    const { token } = req.body;
    console.log(CLIENT_ID)
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });

    const payload = ticket.getPayload();
    console.log('Verified Google User:', payload);

    res.json({
      success: true,
      user: {
        name: payload.name,
        email: payload.email,
      },
    });
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid Token' });
  }
});

app.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });


  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code - CareerConnect',
    // text: `Your OTP is: ${otp}`,
    html: `
    <div style="max-width: 600px; margin: auto; padding: 20px; font-family: Arial, sans-serif; border: 1px solid #ddd; border-radius: 10px;">
        <div style="text-align: center;">
            <img src="https://res.cloudinary.com/dc4aobtkq/image/upload/v1738744938/yv6usrvrwa8ozlzodnp4.png" alt="CareerConnect Logo" style="max-width: 150px; margin-bottom: 20px;">
            <h2 style="color: #007bff; margin-bottom: 10px;">Welcome to CareerConnect!</h2>
            <p style="font-size: 16px; color: #333;">Thank you for signing up. Your OTP for verification is:</p>
            <div style="font-size: 22px; font-weight: bold; color: #28a745; background: #f8f9fa; padding: 10px; border-radius: 5px; display: inline-block; margin: 10px 0;">
                ${otp}
            </div>
            <p style="color: #666;">This OTP is valid for 10 minutes. Please do not share it with anyone.</p>
            <p style="font-size: 14px; color: #999;">If you did not request this, please ignore this email.</p>
        </div>
    </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'OTP sent successfully', email });
  } catch (error) {
    res.status(500).json({ message: 'Error sending OTP', error });
  }
});

app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  if (otpStore[email] && otpStore[email] == otp) {
    delete otpStore[email]; 
    return res.json({ message: 'OTP verified successfully' });
  }
  res.status(400).json({ message: 'Invalid or expired OTP' });
});



app.post("/verify-recaptcha", async (req, res) => {
  const { token } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error verifying reCAPTCHA" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

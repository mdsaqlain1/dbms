import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();
router.post('/sendemail', async (req, res) => {
  const { email, otp } = req.body;
  console.log(email);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'example@gmail.com',
      pass: 'your password'
    }
  });

  const mailOptions = {
    from: 'GoGreen',
    to: email,
    subject: 'OTP',
    text: `Your OTP is ${otp}`
  };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ message: "Error sending email" });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent', email, otp });
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: "Error sending email" });
  }
});

router.post('/sendemail/message', async (req, res) => {
  const { name , email, message } = req.body;
  console.log(email);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mohammedsaqlain202003@gmail.com',
      pass: 'hxwj xmol idem kcml'
    }
  });

  const mailOptions = {
    from: 'GoGreen',
    to: email,
    subject: 'Feedback',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ message: "Error sending email" });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent', email, otp });
      }
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send({ message: "Error sending email" });
  }
});

export default router;

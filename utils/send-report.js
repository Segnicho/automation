// import nodemailer, fs, path
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'segnidesta60@gmail.com',
      pass: "rqyb jubl kmjg tfro",
    },
  });
  
  const reportPath = path.join(__dirname,"..", 'playwright-report', 'index.html');

  const reportContent = fs.readFileSync(reportPath, 'utf8');
  
  let mailOptions = {
    from: '"Test Report" <segnidesta60@gmail.com>',
    to: 'sanyiidastaa7@gmail.com',
    subject: 'Automated Test Report',
    html: `<p>Please find the test report attached.</p><p><a href="cid:report">View Report</a></p>`,
    attachments: [
      {
        filename: 'report.html',
        content: reportContent,
        cid: 'report',
      },
      {
        path: reportPath,
      }
    ],
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });

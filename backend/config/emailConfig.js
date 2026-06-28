const nodemailer = require("nodemailer");

const getEmailConfig = () => {
  const { EMAIL_USER, EMAIL_PASS, EMAIL_HOST, EMAIL_PORT, EMAIL_TO } = process.env;

  const isConfigured = !!(EMAIL_USER && EMAIL_PASS && EMAIL_HOST && EMAIL_TO);

  return {
    isConfigured,
    host: EMAIL_HOST,
    port: EMAIL_PORT || 587,
    from: EMAIL_USER,
    to: EMAIL_TO
  };
};

const createTransporter = () => {
  const { EMAIL_USER, EMAIL_PASS, EMAIL_HOST, EMAIL_PORT } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_HOST) {
    console.warn("⚠️ Email not fully configured. Emails will be simulated.");
    return null;
  }

  return nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT || 587,
    secure: false, // true for 465, false for 587
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000
  });
};

module.exports = { createTransporter, getEmailConfig };

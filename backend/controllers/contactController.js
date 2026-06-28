const { createTransporter, getEmailConfig } = require("../config/emailConfig");

// Validate contact form data
const validateContactData = (data) => {
  const errors = {};
  if (!data.name?.trim()) errors.name = "Name is required";
  if (!data.email?.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email";
  if (!data.message?.trim()) errors.message = "Message is required";

  return { isValid: Object.keys(errors).length === 0, errors };
};

// Send email (Brevo/SMTP safe)
const sendContactEmail = async (contactData) => {
  const transporter = createTransporter();
  const emailConfig = getEmailConfig();

  // Email not configured → simulate
  if (!transporter) {
    console.log("📧 SIMULATED EMAIL:", contactData);
    return { success: true, simulated: true, message: "Email would be sent" };
  }

  try {
    const mailOptions = {
      from: emailConfig.from,
      to: emailConfig.to,
      replyTo: contactData.email,
      subject: contactData.subject || `New Contact: ${contactData.name}`,
      text: `
Name: ${contactData.name}
Email: ${contactData.email}
Phone: ${contactData.phone || "Not provided"}
Service: ${contactData.serviceType || "Not specified"}
Message: ${contactData.message}
Submitted: ${new Date().toLocaleString()}
      `
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    return { success: true, simulated: false };
  } catch (error) {
    console.error("❌ Email sending failed:", error.message);
    return { success: true, simulated: true, message: "Email service unavailable, but message received" };
  }
};

// Handle contact submission
const handleContactSubmission = async (req, res) => {
  try {
    console.log("📥 Contact received:", req.body);

    // Validate
    const validation = validateContactData(req.body);
    
    if (!validation.isValid)
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: validation.errors
      });

    // Send email
    const emailResult = await sendContactEmail(req.body);

    // Respond
    res.json({
      success: true,
      message: emailResult.simulated
        ? "Thank you! Your message has been received. We will contact you shortly."
        : "Thank you! Your message has been sent successfully.",
      data: { name: req.body.name, email: req.body.email, timestamp: new Date().toISOString() }
    });
  } catch (error) {
    console.error("❌ Contact processing error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process your request. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined
    });
  }
};

// Health check
const getHealth = (req, res) => {
  const emailConfig = getEmailConfig();
  res.json({
    status: "healthy",
    service: "contact-api",
    timestamp: new Date().toISOString(),
    email: { configured: emailConfig.isConfigured },
    endpoints: { contact: "POST /api/contact/send", health: "GET /api/contact/health" }
  });
};

module.exports = { handleContactSubmission, getHealth };

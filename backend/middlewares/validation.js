const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body;
  const errors = [];

  // Name validation
  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Valid email is required');
  }

  // Message validation
  if (!message || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  // Phone validation (optional)
   if (req.body.phone && !/^[\d\s\-+()]{10,15}$/.test(req.body.phone)) {
    errors.push('Phone number format is invalid');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  next();
};

module.exports = { validateContactForm };
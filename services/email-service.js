const MailDev = require("maildev");

const emailService = ({
  item_name,
  invoice,
  first_name,
  last_name,
  payer_email,
  mc_gross
}) => {
  // PROD will have a real implementation of an email service and following is for demo only
  const email = {
    to: payer_email,
    subject: `Thank you for shopping with us`,
    body: `Dear ${first_name} ${last_name}. Thank you for purchasing ${item_name}. Attached to this email is the invoice ${invoice} for amount ${mc_gross}`
  };
  console.log("Email sent successfully", email);
};

module.exports = emailService;

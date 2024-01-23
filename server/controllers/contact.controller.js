// controllers/contact.controller.js
exports.sendContactForm = (req, res) => {
    const { fullName, email, message } = req.body;
    
    // Logic to handle the incoming message, e.g., sending an email

    res.status(200).send('Message received successfully');
};

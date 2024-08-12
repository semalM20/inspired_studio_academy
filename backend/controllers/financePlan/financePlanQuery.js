const nodemailer = require('nodemailer');
const financePlanModel = require('../../models/financePlan/financePlan');

const financePlanQuery = async (req, res) => {
    try {

        const { name, email, phone, query } = req.body;

        // Save the query to the database
        const newQuery = new financePlanModel({
            name,
            email,
            phone,
            query
        });

        // Configure Nodemailer
        newQuery.save().then(() => {

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                requireTLS: true,
                auth: {
                    user: process.env.CLIENT_EMAIL,
                    pass: process.env.CLIENT_PASS,
                },
            });

            const mailOptions = {
                from: email,
                to: 'inspiredstudioacademy@yahoo.com',
                subject: 'Finance Plan Query',
                text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nQuery:\n${query}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return res.status(500).json({ error: error.toString(), message: "Mail has been sent:- ", success: false, error: true });
                }
                res.status(200).json({ message: 'Query sent successfully', success: true, error: false });
            });
        }).catch((err) => res.status(500).json({ error: err.toString() }));

    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            success: false,
            error: true
        })
    }
}

module.exports = financePlanQuery;
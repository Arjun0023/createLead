const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/createLead', (req, res) => {
    const { text } = req.body;
    const nameRegex = /create a lead for (\w+)/i;
    const match = text.match(nameRegex);

    if (match && match[1].toLowerCase() === 'arjun') {
        const lead = {
            email: "arjunpawar0023@gmail.com",
            password: "!@#123letsgoo",
            companyName: "asd",
            lastName: "saasd"
        };
        res.json(lead); // Return the lead object directly
    } else {
        res.status(400).json({ success: false, message: 'Invalid input text or lead not found' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

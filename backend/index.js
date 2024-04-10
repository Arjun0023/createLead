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

    if (match && match[1]) {
        const leadName = match[1];
        const lead = {
            name: leadName,
            phone: "123321",
            address: "Pune",
            status: 'created'
        };
        const response = {
            success: true,
            message: 'Lead created successfully',
            lead
        };
        res.json(response);
    } else {
        res.status(400).json({ success: false, message: 'Invalid input text' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

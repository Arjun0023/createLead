const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000; // Choose any port you like

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.post('/createLead', (req, res) => {
    const { name, phone, address } = req.body;
    const lead = {
        name: "Arjun",
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
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

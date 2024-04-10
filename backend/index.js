const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST route to handle incoming text data
app.post('/create-lead', (req, res) => {
    const text = req.body.text;

    // Function to create lead info based on the text
    const createLeadInfo = (text) => {
        if (text.toLowerCase().includes("create a lead for arjun")) {
            const leadData = {
                first_name: "Arjun",
                last_name: "Prakash",
                company: "c2crm",
                designation: "Manager"
            };
            return leadData;
        } else {
            return { error: "No matching lead creation text found." };
        }
    };

    // Call function to create lead info
    const leadInfo = createLeadInfo(text);

    // Return the JSON data
    res.json(leadInfo);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
app.use(express.json());
// Priyanshi Jaiswal
// POST endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    const user_id = "priyanshijaiswal";
    const email = "priyanshijaiswal.com";
    const roll_number = "21BCB0110";

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());

    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 
        ? lowercaseAlphabets.sort().reverse()[0] 
        : null;

    const response = {
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };

    res.json(response);
});


app.get('/bfhl', (req, res) => {
    res.status(200).json({ "operation_code": 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


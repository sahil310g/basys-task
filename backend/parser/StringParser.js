const OpenAI = require('openai');
require('dotenv').config();

const openAPI = new OpenAI({
    apiKey: process.env.API_KEY,
});

async function stringParse(input) {
    
    const completion = await openAPI.chat.completions.create({
        messages: [
        { "role": "system", "content": "Based on text input in chatbot, just categorise input into 1. Policy Breakdown 2. What is missing 3. Benefit Checks 4. Download form. Write only number." },
        { "role": "user", "content": input }],
        model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message.content;
}

module.exports = stringParse;
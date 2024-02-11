const OpenAI = require('openai');
require('dotenv').config();

const openAPI = new OpenAI({
    apiKey: process.env.API_KEY,
});

async function stringParse(input) {
    
    const completion = await openAPI.chat.completions.create({
        messages: [
        { "role": "system", "content": "Based on text input in chatbot, just categorise input into \n 1. Policy Breakdown or detail \n 2. What is missing \n 3. Benefit Checks \n 4. Download form. Write only category index." },
        { "role": "user", "content": input }],
        model: "gpt-3.5-turbo",
    });
    return completion.choices[0].message.content;
}

module.exports = stringParse;
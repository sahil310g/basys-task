const OpenAI = require('openai');
require('dotenv').config();

const openAPI = new OpenAI({
    apiKey: process.env.API_KEY,
});


async function idParser(input){
    const completion = await openAPI.chat.completions.create({
        messages: [
        { "role": "system", "content": "Based on input in a chatbot, just a json response with policyID and patientID from the text input. In case any of them is not present, write null for it." },
        { "role": "user", "content": input }],
        model: "gpt-3.5-turbo",
    });
    return JSON.parse(completion.choices[0].message.content);
}

module.exports = idParser;
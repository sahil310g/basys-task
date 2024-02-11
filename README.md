Created a chatBot that provides information based on the form present in the Database

***Backend Setup***

- Create .env file in backend folder
- Add OpenAI API Key in .env file by name OPENAI_API_KEY
- Go to https://platform.openai.com/ for account setup and creating Secret API key
- Add MongoDB Database url in .env file by name DATABASE_URL
- Go to https://cloud.mongodb.com/ to create a new database and copy the connection string

.env file

```
DATABASE_URL = "MongoDB connection string"
OPENAI_API_KEY = "OpenAI API Key"
```

- To run the backend server

```
cd backend
npm init
nodemon index.js
```

***Frontend Setup***

```
cd frontend
npm install
npm start
```

const express   = require('express');
const connectDB = require('./config/db')

const app = express();
connectDB();
app.get('/', (req, res) => {
	res.send("app.js is working.") 
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
});
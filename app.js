const express   = require('express');
const connectDB = require('./config/db')
var   cors      = require('cors');

const books = require('./routes/api/books');
const app   = express();

connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('app.js is working.'));

// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
});
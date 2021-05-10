const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async() => {
    try {
        await mongoose.connect(
            db, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log("MongoDB is connected!")
    }
    catch(err) {
        console.log("==================== db ====================")
        console.log(db);
        console.log("==================== err ====================")
        console.log(err);
        console.log("==================== err.reason ====================")
        console.log(err.reason);
        console.log("==================== err.reason.servers ====================")
        console.log(err.reason.servers);
        console.log("==================== err.message ====================")
        console.error(err.message);
        console.log("==================== EXITING ====================")
        process.exit(1);
    }
}

module.exports = connectDB;
import mongoose from "mongoose";
import { mongodb_uri } from "./constants";
// import logger from "./logger";

async function connectToDatabase() {
    try {
        await mongoose.connect(mongodb_uri);
        // logger.info('Connected to database');
        console.log('Connected to database');
        
    } catch (error) {
        // logger.error('Error connecting to database', error);
        console.log('Error connecting to database', error);
        
    }
}

connectToDatabase();
import mongoose from 'mongoose';

const connectToDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/MusicPlayer');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
    }
};

export default connectToDB;

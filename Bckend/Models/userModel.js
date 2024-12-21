import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


dotenv.config();

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET || 'kaku',
        { expiresIn: '24h' }
    );
    return token;
};

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};


userSchema.statics.hashPassword = function (password) {
    return bcrypt.hash(password, 10);
};

const userModel = mongoose.model('user', userSchema);
export default userModel;
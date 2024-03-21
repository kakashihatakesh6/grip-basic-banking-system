import mongoose from 'mongoose';
const { Schema } = mongoose;

const CustomerSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    currentBalance: {type: String, required: true},
    registeredAt: {type: String, default: Date()}
}, {timestamps: true});

export default mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);
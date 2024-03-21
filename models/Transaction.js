import mongoose from 'mongoose';
const { Schema } = mongoose;

const TransactionSchema = new Schema({
    from: {type: String, required: true},
    to: {type: String, required: true},
    amount: {type: String, required: true},
    transferredAt: {type: String, default: Date()}
}, {timestamps: true});

export default mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);
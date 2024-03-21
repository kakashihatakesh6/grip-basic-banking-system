import connectDb from "@/middleware/db";
import Transaction from "@/models/Transaction";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const {from, to, amount} = req.body.bodyData;
        try {
            const newTransaction = new Transaction({
                from: from,
                to: to,
                amount: amount
            });
            await newTransaction.save();
            res.status(200).json({success: true, message: "Transaction Completed!"});
        } catch (error) {
            res.staus(500).json({success: false, message: "Internal Server Error!"})
        }
    }
}

export default connectDb(handler);
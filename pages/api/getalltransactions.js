import connectDb from "@/middleware/db";
import Transaction from "@/models/Transaction";

const handler = async (req, res) => {

    if (req.method === "GET") {
        try {
            let allTransactions = await Transaction.find();
            res.status(200).json({ success: true, transactions: allTransactions });
        } catch (error) {
            res.status(500).json({ success: true, message: "Internal Server Error!" });
        }
    }
}

export default connectDb(handler);
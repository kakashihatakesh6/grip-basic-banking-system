import connectDb from "@/middleware/db";
import Customer from '../../models/Customer';

const handler = async (req, res) => {
    if (req.method === "GET") {
        try {
            let customers = await Customer.find();
            res.status(200).json({ success: true, customers: customers })
        } catch (error) {
            res.status(500).json({ success: true, message: "Internal Server Error!" })
        }
    }
}

export default connectDb(handler);


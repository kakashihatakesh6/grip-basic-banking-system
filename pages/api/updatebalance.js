import connectDb from "@/middleware/db"
import Customer from "@/models/Customer";

const handler = async (req, res) => {
    if (req.method === "POST") {
        const { amount, email } = req.body.bodyData;
        try {
            await Customer.findOneAndUpdate( {email: email }, { currentBalance: amount } );
            res.status(200).json({ success: true, message: "Balance Updated Successfully!" });
        } catch (error) { 
            res.status(500).json({ success: false, message: "Internal Server Error!" });
        }
    }

}

export default connectDb(handler);
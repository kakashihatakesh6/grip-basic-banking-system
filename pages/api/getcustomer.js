import connectDb from "@/middleware/db"
import Customer from "@/models/Customer";

const handler = async (req, res) => {
    const { id } = req.query;
    console.log(id)

    if (req.method === "GET") {
        try {
            let customer = await Customer.findOne({ _id: id });
            res.status(200).json({ success: true, customer: customer })
        } catch (error) {
            res.status(500).json({ success: true, message: "Internal Server Error!" })
        }
    }
}

export default connectDb(handler);
import connectDb from "@/middleware/db";
import Customer from "../../models/Customer";

const handler = async (req, res) => {
    if (req.method == 'POST') {
        const { name, email, currentBalance } = req.body;
        let customer = await Customer.findOne({email: email});
        if (customer) {
            res.status(500).json({success: true, message: "Internal Server Error!"});
        }
        let newCustomer = new Customer({
            name, email, currentBalance
        });
        await newCustomer.save();

        res.status(200).json({success: true, message: "Customer Created Successfully!"});
    }
}

export default connectDb(handler);



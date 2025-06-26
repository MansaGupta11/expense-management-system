const { get } = require("mongoose")
const transactionModel = require("../models/transactionModel");

const getAllTransactions = async (req,res) => {
    try{
        const transactions = await transactionModel.find({});
        res.status(200).json(transactions)    
}
catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};


const addTransaction = async (req, res) => {
    try{
        const NewTransaction = new transactionModel(req.body);
        await NewTransaction.save();
        res.status(201).send('Transaction Created Successfully');
}
catch(error){
    console.log(error);
    res.status(500).json(error)

}
};

module.exports = {getAllTransactions, addTransaction};
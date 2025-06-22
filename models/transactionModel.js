const mongoose = require('mongoose');
const transactionSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: [true,'amount is required']
    }
})

const transactionModel = mongoose.model('Transaction', transactionSchema);
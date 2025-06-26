const express = require("express");
const {addTransaction} = require("../controllers/transactionctrl");

//router object
const router = express.Router();
//routes
//add transaction post method
router.post("/add-transaction", addTransaction);

//get all transactions
router.get("/get-all-transactions", getAllTransactions);

module.exports = router;

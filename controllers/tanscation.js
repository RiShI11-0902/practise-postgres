const Transaction = require("../models/transaction")

exports.allTransactions = async (req,res)=>{
    try {
        const response = await Transaction.findAll()
        res.json({message:"All transactions are here", transactions: response})
    } catch (error) {
        res.json({message:"Error", error: error})
    }
}

exports.last_six_month_trans = (req,res)=>{
    
}
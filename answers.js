// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("test")

//ex1
// db.linkedon.count({
//     salary: {
//         $gt: 25000
//     }
// })

//ex2
//db.linkedon.find({}, {"firstName" : 1, "salary" : 1}).sort({salary: -1}).limit(3)

//ex3
// db.linkedon.countDocuments({
//     "currentCompany.name": "Walmart",
//     salary: {
//         $gte: 7000
//     }
// })

//ex4
// db.linkedon.find({
//     $or: [{"currentCompany.industry" : "Sales"} ,{"currentCompany.industry" : "Retail"}]
// },{
//     "currentCompany.name": 1,
//     firstName: 1,
//     lastName: 1,
//     salary: 1

// }).sort({salary: -1}).limit(1)

//ex5
// db.linkedon.countDocuments({
//  $or: [{"currentCompany.name": "Apple"},{
//     "previousCompanies.name" : "Apple"}]
// })

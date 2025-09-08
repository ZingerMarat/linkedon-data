const mongoose = require("mongoose")
const fs = require("fs")
const data = JSON.parse(fs.readFileSync("people.json"))

mongoose.connect(
  "mongodb+srv://zingermarat_db_user:lHJVG77z07ID1Lj1@cluster0.4beyfld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true }
)

const Person = mongoose.model(
  "Person",
  new mongoose.Schema(
    {
      firstName: String,
      lastName: String,
      currentCompany: {
        industry: String,
        name: String,
      },
      currentPosition: String,
      previousCompanies: [
        {
          industry: String,
          name: String,
        },
      ],
      salary: Number,
    },
    { collection: "linkedon" },
    { multi: true }
  )
)

const onInsert = function (err, docs) {
  if (err) {
    console.log(err)
  } else {
    console.info("Done")
    mongoose.disconnect()
  }
}

Person.collection.insertMany(data, onInsert)

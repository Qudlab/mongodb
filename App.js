// 1. Create a database called "contact"
use contact

// 2. Create a collection called "contactlist"
db.createCollection("contactlist")

// 3. Insert documents into "contactlist"
db.contactlist.insertMany([
  { lastName: "Ben Lahmer", firstName: "Fares", email: "fares@gmail.com", age: 26 },
  { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
  { lastName: "Fatnassi", firstName: "Sarra", email: "sarra.f@gmail.com", age: 40 },
  { lastName: "Ben Yahia", firstName: "Rym", age: 4 },
  { lastName: "Cherif", firstName: "Sami", age: 3 }
])

// 4. Display all contacts
db.contactlist.find()

// 5. Display information about one person using their ID
// Note: Replace "ObjectId" with the actual ID of the document you want to retrieve
db.contactlist.findOne({ _id: ObjectId("your_document_id_here") })

// 6. Display contacts with age > 18
db.contactlist.find({ age: { $gt: 18 } })

// 7. Display contacts with age > 18 and name containing "ah"
db.contactlist.find({ $and: [{ age: { $gt: 18 } }, { lastName: /ah/i }] })

// 8. Change the contact's first name from "Kefi Seif" to "Kefi Anis"
db.contactlist.updateOne({ firstName: "Seif" }, { $set: { firstName: "Anis" } })

// 9. Delete contacts aged under 5
db.contactlist.deleteMany({ age: { $lt: 5 } })

// 10. Display all contacts after deletion
db.contactlist.find()

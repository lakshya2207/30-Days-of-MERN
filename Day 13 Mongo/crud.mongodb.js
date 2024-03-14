use("CrudDb")
console.log(db);


// Create

db.createCollection("tabel1");

// INsert

// db.tabel1.insertOne({
//     Rollno:1,
//     Name:"Ayush",
//     assignment:12,
//     projects:45
// })


db.tabel1.insertMany([
    { "Rollno": 1, "Name": "Ayush", "assignment": 12, "projects": 45 },
    { "Rollno": 2, "Name": "John", "assignment": 15, "projects": 40 },
    { "Rollno": 3, "Name": "Emily", "assignment": 10, "projects": 48 },
    { "Rollno": 4, "Name": "Michael", "assignment": 13, "projects": 42 },
    { "Rollno": 5, "Name": "Sarah", "assignment": 11, "projects": 47 },
    { "Rollno": 6, "Name": "David", "assignment": 14, "projects": 41 },
    { "Rollno": 7, "Name": "Sophia", "assignment": 9, "projects": 49 },
    { "Rollno": 8, "Name": "Jacob", "assignment": 16, "projects": 38 },
    { "Rollno": 9, "Name": "Emma", "assignment": 8, "projects": 50 },
    { "Rollno": 10, "Name": "Olivia", "assignment": 17, "projects": 37 }
  
])


// read

// let a = db.tabel1.find({Rollno:3})
// console.log(a.count(),a.toArray());
// console.log(data.count(),data.toArray());

// let b = db.tabel1.findOne({Rollno:3})s


// update

let c = db.tabel1.findOne({projects:50})
db.tabel1.updateMany({projects:50},{$set:{projects:25}})
let d = db.tabel1.findOne({projects:25})
console.log(c,d);

// delete
db.tabel1.deleteMany({})
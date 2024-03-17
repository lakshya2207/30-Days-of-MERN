use("first")
console.log(db);


// Create

db.createCollection("test1");

// INsert

// db.dob.insertOne({
//     Rollno:1,
//     Name:"Ayush",
//     assignment:12,
//     projects:45
// })


db.test1.insertMany([
    {
      "name": "Lakshya",
      "dob": "22/07/2003"
    },
    {
      "name": "John",
      "dob": "05/12/1995"
    },
    {
      "name": "Emily",
      "dob": "18/03/2000"
    },
    {
      "name": "David",
      "dob": "30/09/1988"
    },
    {
      "name": "Sarah",
      "dob": "12/06/1992"
    },
    {
      "name": "Michael",
      "dob": "25/11/1976"
    },
    {
      "name": "Emma",
      "dob": "08/04/1985"
    },
    {
      "name": "James",
      "dob": "17/09/1998"
    },
    {
      "name": "Olivia",
      "dob": "29/01/1990"
    },
    {
      "name": "William",
      "dob": "03/08/1983"
    },
    {
      "name": "Isabella",
      "dob": "14/02/2005"
    }
  ]
  )


// read

// let a = db.dob.find({Rollno:3})
// console.log(a.count(),a.toArray());
// console.log(data.count(),data.toArray());

// let b = db.dob.findOne({Rollno:3})s


// update

// let c = db.dob.findOne({projects:50})
// db.dob.updateMany({projects:50},{$set:{projects:25}})
// let d = db.dob.findOne({projects:25})
// console.log(c,d);

// delete
// db.dob.deleteMany({})
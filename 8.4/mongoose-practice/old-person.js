const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true })

const Schema = mongoose.Schema

const addressSchema = new Schema({
    city: String,
    street: String,
    apartment: Number
})

const personSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    age: Number,
    address: addressSchema
})

const Person = mongoose.model('Person', personSchema, 'people')
let p1 = new Person({
    firstName: "david",
    lastName: "co",
    age: 24
})
// console.log(p1)
// p1.save()


let p2 = new Person({ firstName: "Shoo", lastName: "Bert", age: 50 })
let p3 = new Person({ firstName: "Shoob", lastName: "Ert", age: 34 })
let p4 = new Person({ firstName: "Sh", lastName: "Oobert", age: 10 })
let p5 = new Person({ firstName: "Shoober", lastName: "T", age: 44 })

let allTheShooberts = [p2, p3, p4, p5]
// allTheShooberts.forEach(s => s.save())

// Person.find({age: {$gt: 30}}, function (err, people) {
//     console.log(people)
// })
// Person.findByIdAndUpdate("5caaf715f5f8de1c88c0029b", { age: 70 }, { new: true }, function (err, person) {
//     console.log(person)
// })
// Person.find({age: {$gt:30}},function (err, people){
//     people.forEach(p => {
//         p.firstName = "Treboohs"
//         p.save()
//     })
// })


// mongoose.connect('mongodb://localhost/computerDB', { useNewUrlParser: true })
// const computerSchema = new Schema({
//     maker: String,
//     price: Number
// })

// const Computer = mongoose.model('Computer', computerSchema, 'computers')
// let c1 = new Computer({
//     maker: "Alienware",
//     price: 5555
// })
// let c2 = new Computer({
//     maker: "Dell",
//     price: 2222
// })
// c1.save()
// c2.save()
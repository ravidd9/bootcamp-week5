const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

//1
router.post('/person', function(req, res){
    let body = req.body
    let p1 = new Person({
        firstName: body.firstName,
        lastName: body.lastName,
        age: body.age
    })
    p1.save()
    res.send(p1)
})

//2
router.put('/person', function(req,res){
    let id1 = req.query.id
    Person.findByIdAndUpdate({_id: id1},{age: 70},{new: true} ,function(err, people){
        res.send(people)
    })
})

//3
router.delete('/apocalypse', function(req, res){
    Person.remove({}, function(err){
        console.log("deleted")
        res.end()
    })
})

module.exports = router
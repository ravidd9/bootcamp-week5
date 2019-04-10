
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost/mongoose-solar",
 { useNewUrlParser: true })


const solarSystemSchema = new Schema({ 
    planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}],
    starName: String
})
  
const planetSchema = new Schema({ 
    name: String,
    system: {type: Schema.Types.ObjectId, ref: 'System'},
    visitors: [{type: Schema.Types.ObjectId, ref: 'Visitor'}]
})

const visitorSchema = new Schema({ 
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: 'Planet'},
    visitedPlanets: [{type: Schema.Types.ObjectId, ref: 'Planet'}]
})


const System = mongoose.model("System", solarSystemSchema, "systems")
const Planet = mongoose.model("Planet", planetSchema, "planets")
const Visitor = mongoose.model("Visitor", visitorSchema, "visitors")


// let s1 = new System({
//     planets:[],
//     starName: "Milky way"
// })
// let p1 = new Planet({
//     name: "Earth",
//     system: s1,
//     visitors: []
// })
// let p2 = new Planet({
//     name: "Mars",
//     system: s1,
//     visitors: []
// })
// let v1 = new Visitor({
//     name: "Ravid",
//     homePlanet: p1,
//     visitedPlanets:[]
// }) 
// let v2 = new Visitor({
//     name: "Yossi",
//     homePlanet: p1,
//     visitedPlanets:[]
// }) 

// s1.planets.push(p1, p2)
// p1.visitors.push(v1, v2)
// p2.visitors.push(v1)
// v1.visitedPlanets.push(p1, p2)
// v2.visitedPlanets.push(p1)

// s1.save()
// p1.save()
// p2.save()
// v1.save()
// v2.save()
// console.log("SAVED")


//1
// Visitor.findOne({})
//     .populate("visitedPlanets")
//     .exec((err, visitor) =>  {
//         console.log(visitor.visitedPlanets)
//     })

//2
// Planet.findOne({})
//     .populate("visitors")
//     .exec((err, planet) => {
//         console.log(planet.visitors)
//     })

//3
// System.findOne({})
//     .populate({
//         path: "planets",
//         populate: {
//             path: "visitors"
//         }
//     })
//     .exec((err, system) =>{
//         console.log(system.planets)
//     })

//4
// Visitor.findOne({})
//     .populate({
//         path: "homePlanet",
//         populate: {
//             path: "system"
//         }
//     })
//     .exec((err, visitor) => {
//         console.log(visitor.homePlanet.system.starName)
//     })

//5
Planet.findOne({})
    .populate("system visitors")
    .exec((err, planet) => {
        console.log(planet.system.starName)
        console.log(planet.visitors)
    })


const express = require('express')
const mongoose = require('mongoose')

const route = express()
const Schema = mongoose.Schema

const systemSchema = new Schema({
    planets: [{ type: Schema.Types.ObjectId, ref: "Planet"}],
    starName: String
})
const planetSchema = new Schema({
    name: String,
    system: { type: Schema.Types.ObjectId, ref: "System" },
    visitors: [{ type:Schema.Types.ObjectId, ref:"Visitor" }]
})
const visitorSchema = new Schema({
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: "Planet"},
    visitedPlanets: [{type: Schema.Types.ObjectId, ref:"Planet"}]
})
const System = mongoose.model("System", systemSchema)
const Planet = mongoose.model("Planet", planetSchema)
const Visitor = mongoose.model("Visitor", visitorSchema)

// const s1 = new System({
//     planets: [],
//     starName: "solar",
// })
// const p1 = new Planet({
//     name: "earth",
//     system: s1,
//     visitors: []
// })
// const p2 = new Planet({
//     name: "mars",
//     system: s1,
//     visitors: []
// })
// const v1 = new Visitor({
//     name: "yuval",
//     homePlanet: p1,
//     visitedPlanets: [p1, p2]
// })

// s1.planets.push(p1)
// s1.planets.push(p2)
// p1.visitors.push(v1)
// p2.visitors.push(v1)

// s1.save()
// p1.save()
// p2.save()
// v1.save()

// Visitor.find({}).populate("visitedPlanets").then(function(visitors){
//     console.log(visitors)
// })

// Planet.find({}).populate("visitors").then(function(planets){
//     console.log(planets[0].visitors);
//     console.log(planets[1].visitors);
// })


// System.find({}).populate({
//         path: "planets",
//         populate:{
//             path: "visitors"
//         }
// })
// .then(function(system){
//     console.log(system[0].planets[0].visitors);
//     console.log(system[0].planets[1].visitors);
// })

// Visitor.find({}).populate({
//     path: "homePlanet",
//     populate:{
//         path:"system"
//     }
// })
// .then(function(visitors){
//         console.log(visitors[0].homePlanet.system.starName)
//     })


Planet.find({}).populate('visitors system').then(function(planet){
    console.log(planet);
})


module.exports = route
const express = require('express')
const mongoose = require('mongoose')

const route = express()
const Schema = mongoose.Schema


const bookSchema = new Schema({
    title: String,
    author: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }] //reference to an array of Review documents
})

const reviewSchema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: 'Book' }, //reference to a Book document
    reviewText: String,
    critic: { type: Schema.Types.ObjectId, ref: 'Critic' } //reference to a Critic document
})

const criticSchema = new Schema({
    name: String,
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }], //reference to an array of Review documents
})

const Book = mongoose.model("book", bookSchema)
const Review = mongoose.model("Review", reviewSchema)
const Critic = mongoose.model("Critic", criticSchema)

// let b1 = new Book({
//     title: "Name of the Wind",
//     author: "Patrick Rothfuss",
//     reviews: []
// })

// let c1 = new Critic({
//     name: "William Jeffery",
//     reviews: []
// })

// let r1 = new Review({
//     book: b1,
//     critic: c1,
//     reviewText: "Excellent Book"
// })

// b1.reviews.push(r1)
// c1.reviews.push(r1)

// b1.save()
// c1.save()
// r1.save()

// Book.findOne({}, function (err, book) {
//     console.log(book.reviews)
// })

// Book.findOne({})
//     .populate("reviews")
//     .exec(function (err, book) {
//         console.log(book.reviews)
//     })

// Book.findOne({})
//     .populate({
//         path: 'reviews',
//         populate: {
//             path: 'critic'
//         }
//     })
//     .exec(function (err, book) {
//         console.log(book.reviews)
//     })


// Review.find({}, function (err, reviews) {
//     console.log(reviews)
// })
// Book.findById('5f573e39708fbc3d9c8fe6a8', function(book) {
//     console.log(book);
// })
// Review.find({}).populate('book')
//     .exec(function (err, reviews) {
//         console.log(reviews)
// })


// Critic.findOne({}, function(err, critic) {
//     //now we have a single critic
//     critic.populate('reviews', function() {
//       console.log(critic.reviews)
//     })
//   })


module.exports = route
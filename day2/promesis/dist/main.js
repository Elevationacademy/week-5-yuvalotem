// $.get('/randomWord', function (word) {
//     $.get(`/synonyms/${word}`, function (synonyms) {
//         $.get(`/sentiment/${word}`, function (sentiment) {
//             console.log(`
//             The word ${word} has a 
//             ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//             its synonyms are: ${synonyms}`)
//         })
//     })
// })

// let p = $.get('/randomWord') //notice that we don't use a callback in this case! We can, but this is what we're avoiding.
// .then(function (word) {
//     console.log(word)
//     console.log(p.state())
// })

// const promiseWord  = $.get('/sentiment/Ploy')
// promiseWord.then(function(num){
//     console.log(num);
// })

// $.get('/randomWord')
//     .then(function(word){
//          return $.get('/sentiment/' + word)
//     })
//     .then(function(sentiment){
//         console.log(sentiment);
//     })

// const randomWordPromise = $.get('/randomWord')
// const sentimentPromise = randomWordPromise.then(function(word){
//     return $.get('/sentiment/' + word)
// })
// sentimentPromise.then(function(sentiment){
//     console.log(sentiment);
// })

// $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 console.log(results)
//             })
//     })

// const printResults = function (word, synonyms, sentiment) {
//     console.log(`
//         The word ${word} has a 
//         ${sentiment === 1 ? "Positive" : sentiment === -1 ? "Negative" : "Neutral"} sentiment,
//         its synonyms are: ${synonyms}`
//     )
// }

// $.get('/randomWord')
//     .then(function (word) {
//         let synonymsPromise = $.get(`/synonyms/${word}`)
//         let sentimentPromise = $.get(`/sentiment/${word}`)
//         Promise.all([synonymsPromise, sentimentPromise])
//             .then(function (results) {
//                 printResults(word, results[0], results[1])
//             })
//     })

//ex 1
// $.get('/randomWord')
// .then(function(word){
//     return $.get('https://www.googleapis.com/books/v1/volumes?q=title:' + word)
// }).then(function(book){
//     console.log(book.items[0].volumeInfo.title);
// })

//ex 2
$.get('/randomWord')
.then(function(word){
    const bookPromise = $.get('https://www.googleapis.com/books/v1/volumes?q=title:' + word)
    const imgPromise = $.get(`https://api.giphy.com/v1/gifs/search?api_key=8EowMeglFAanhs7YlWH7mV8Kf9tSYmNk&q=${word}&limit=1&offset=0&rating=g&lang=en`)
    Promise.all([bookPromise, imgPromise])
    .then(function(results){
        $('body').append(`<h1>${word}</h1>`)
        $('body').append(`<div>${results[0].items[0].volumeInfo.title}</div>`)
        $('body').append(`<iframe src="${results[1].data[0].embed_url}"></iframe>`)
    })
})

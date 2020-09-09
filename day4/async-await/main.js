const fetchData = async function (surname) {
    const people = await Person.find({ lastName: surname })
    console.log(people)
}
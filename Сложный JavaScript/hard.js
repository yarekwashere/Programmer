const person = new Object( {
    name: 'Yarik',
    age: 18,
    greet: function() {
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function() {
    console.log('Hello!')
}

const lena = Object.create(person) 
lena.name = "Elena";


// for..in

let person = {
    name: 'lio',
    age: 27,
    city: 'sao paulo',
    weight: '70kg'
}

for (let property in person) {
    console.log(property);
    console.log(person[property]);
    console.log(property.name);
}
const greeting = (user = 'User') => {
    console.log('Hello', user);
}
greeting('Sasongko')
greeting()

const product = {
    name: 'Milk',
    label: 'Strawberry',
    dateCreated: '21-Okt-2020',
    dateExp: '21-Okt-2021',
}

const name = product.name 
const label = product.label

const drink = (user = 'User', {name, label} = {name: 'Tea', label: 'Sweat'}) => {
    console.log('Hi', user, 'it seems , you like drink', label, name, );
}

drink('Sasongko', product)

drink()
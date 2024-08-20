const data = [
    { name: "Beto",   age: 23, salary: 2800,  active: true,   team: "Frontend",   bonus: 0 },
    { name: "Allan",  age: 31, salary: 4200,  active: false,  team: "Full Stack", bonus: 0 },
    { name: "Marcos", age: 39, salary: 12800, active: true,   team: "Senior",     bonus: 0 },
    { name: "Alice",  age: 42, salary: 5800,  active: false,  team: "Full Stack", bonus: 0 },
    { name: "Carla",  age: 38, salary: 4800,  active: true,   team: "Full Stack", bonus: 0 }
];

// consultar tamamanho
// console.log(data.length)

// fazer um filtro 1 item
// const user = data.find( (item) => { return item.age > 30 })
// console.log(user)

// filtrar itens 1
// const users = data.filter( (item) => { return item.name !== ""; })
// console.log('total: ' + users.length)

// filtrar itens 2
// const users2 = data.filter( (item) => { return item.salary >= 1000; })
// console.log('Encontrados total: ' + users2.length)
// console.log( users2 )

// findIndex
// const indexUser = data.findIndex( (item) => {
//     return item.name === "Alice"
// })
// console.log('posição encontrada: ' + indexUser)

// find status
// const indexUser = data.findIndex((user) => {
//     return user.name === "Alice"
// })
// console.log('index do usuário: ' + indexUser)
// const status = data[indexUser].active = false
// console.log('Status: ' + status)
// console.log(data)

// Map 1
// const users = data.map( (user, index) => {
//     return "Olá " + user.name
// })
// console.log(users)
// console.log(data)

// Map 2
// const fn_users = data.map((user, index) => {
//     if(user.salary < 5000){
//         user.salary += 500;
//         user.bonus += 200;
//     }
//     return{
//         name: user.name,
//         salary: user.salary,
//         bonus: user.bonus
//     }
// })
// console.log(fn_users)
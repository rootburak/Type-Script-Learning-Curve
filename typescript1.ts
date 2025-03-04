let userName:string ="burak"
let age:number = 20

function greetingUser(userName:string, age:number):string{
    let greeting:string = `Hello ${userName} you are ${age} years old.`
    return greeting
}
console.log(greetingUser(userName, age)) 

function invitedUsers(...args:string[]):string{
    return ""+args.join(" ")
}

console.log(invitedUsers("burak", "emre", "efe"))
console.log(invitedUsers()) // don't getting errors here

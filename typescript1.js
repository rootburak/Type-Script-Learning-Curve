var userName = "burak";
var age = 20;
function greetingUser(userName, age) {
    var greeting = "Hello ".concat(userName, " you are ").concat(age, " years old.");
    return greeting;
}
console.log(greetingUser(userName, age));
function invitedUsers() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return "" + args.join(" ");
}
console.log(invitedUsers("burak", "emre", "efe"));

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printName() {
        return this.name;
    }
    printAge() {
        return this.age;
    }
}
function printName(user) {
    return `User's name is ${user.printName()}`;
}
function printAge(user) {
    return `User's age is ${user.printAge()}`;
}


module.exports = {
    User,
    printAge,
    printName
}
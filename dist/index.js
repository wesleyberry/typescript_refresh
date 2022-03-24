"use strict";
// Basic Types
let id = 5;
let company = 'Berry Dev';
let isPublished = false;
let x = 'Hello';
x = true;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Wes', true];
// Tuple Array
let employee;
employee = [
    [1, 'Wes'],
    [2, 'John'],
    [3, 'George']
];
// Union
let pid;
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
// Type assertion
let cid = 1;
let customerId = cid;
// or
// let customerId = <number>cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// Void - when function returns nothing
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const p1 = 1;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return 'hello';
    }
}
const wes = new Person(1, 'Wes');
// Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, 'James', 'Engineer');
// Generics
// T is a placeholder for type
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(['wes', 'james', 'john', 'jill']);

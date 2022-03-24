// Basic Types
let id:number = 5;
let company:string = 'Berry Dev';
let isPublished:boolean = false;
let x:any = 'Hello';

x = true;
let ids:number[] = [1, 2, 3, 4, 5];

let arr:any[] = [1, true, 'Hello'];
// Tuple
let person: [number, string, boolean] = [1, 'Wes', true];
// Tuple Array
let employee: [number, string][];
employee = [
    [1, 'Wes'],
    [2, 'John'],
    [3, 'George']
]

// Union
let pid: string | number;
pid = 22;

// Enum
enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}

// Type assertion
let cid: any = 1;
let customerId = cid as number;
// or
// let customerId = <number>cid;

// Functions
function addNum(x: number, y: number): number {
    return x + y;
}
// Void - when function returns nothing
function log(message: string | number): void {
    console.log(message)
}

// Interfaces - Specific structure to object or function
// When using objects, use interface instead of type
interface UserInterface {
    readonly id: number, /* readonly can only be read */
    name: string,
    age?: number /* ? for optional */
}
const user1: UserInterface = {
    id: 1,
    name: 'John'
}
interface MathFunc {
    (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;


// Type can be used with primitives and unions
type Point = number | string;
const p1: Point = 1;

// Classes
// public - can be accessed anywhere
// private - can acces only from within class
// protected - can only access it from within this class or extended class
interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person implements PersonInterface {
    id: number
    name: string
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return 'hello'
    }
}
const wes = new Person(1, 'Wes');

// Subclass
class Employee extends Person {
    position: string
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(2, 'James', 'Engineer')

// Generics
// T is a placeholder for type
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}
let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(['wes', 'james', 'john', 'jill']);

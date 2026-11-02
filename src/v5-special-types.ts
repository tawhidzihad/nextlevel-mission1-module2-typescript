//* Top Types
let helloWorld: any = "Hello World";
helloWorld = 1234;
helloWorld.length;

const something: unknown = "Hello World";
// something.length

//* Core Types
const name: string = "Tawhid";
const bool: boolean = false;
const symbol: symbol = Symbol();
const bigint: bigint = 1242n;
const num: number = 1234;
let nothing: void;

let something2: unknown;

something2 = num;
something2 = nothing;

// literal type in their up level type
type Status = "pending" | "success";
let someStatus: string;
let status: Status = "success";
someStatus = status;

//* Nullish Types
interface User {
	name: string;
}
type LoggedInuser = User | null;
const currentUser: LoggedInuser = null;

//* Unit Type
const greet = () => {
	// console.log("Hello from Greet");
};
// const greetingsForGreet: string = greet()
something2 = greet();

//* Sub-Type of Unit Type
const anotherGreet = (): undefined => {
    // Best practice is to use void
	// console.log("Hello from anotherGreet");
};
const greetings = anotherGreet();

//* Bottom Type
// let neverHappening : never = 1232
const getError = (msg: string): never => {
	throw new Error(msg);
};
// const a: number = getError("This is error");
// const b: string = getError("This is error");
// const c: boolean = getError("This is error");
// const x: undefined = getError("This is error");

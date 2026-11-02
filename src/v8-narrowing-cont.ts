//* Some Caveat Of Type Guard
const printAll = (x: string | string[] | null) => {
	if (x && typeof x === "object") {
		for (let str of x) {
			console.log(str);
		}
	} else if (typeof x === "string") {
		console.log(x);
	} else {
		console.log("");
	}
};

//* Equality
const compare = (x: number | string, y: number | boolean) => {
	if (x === y) {
		console.log(x, y);
	}
};

const printAll2 = (x: string | string[] | null) => {
	if (x !== null) {
		if (typeof x === "object") {
			for (let str of x) {
				console.log("from array of string", str);
			}
			return;
		}
		console.log("from just string", x);
		return;
	}
	console.log("from null or other type data", x);
};

//* "in" Operator
type Bird = { fly: () => void };
type Fish = { swim: () => void };
const mode = (animal: Bird | Fish) => {
	if ("fly" in animal) {
		animal.fly();
		return;
	}
	animal.swim();
};

//* "instanceof" Check
// const date = new Date();
// const err = new Error("Something went wrong");
// console.log(date instanceof Date);
// console.log(err instanceof Error);

const showDate = (x: Date | string) => {
	if (x instanceof Date) {
		console.log(x.toISOString());
		return;
	}
	const date = new Date(x);
	console.log(date.toISOString());
};

//* Discriminated Union
interface Circle {
	kind: "circle";
	radius: number;
}

interface Square {
	kind: "squre";
	sideLength: number;
}

const getArea = (shape: Circle | Square) => {
	if (shape.kind === "circle") {
		console.log(shape.radius);
	} else {
		console.log(shape.sideLength);
	}
};

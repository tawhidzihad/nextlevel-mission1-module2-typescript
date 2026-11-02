//* Type alias VS Interface.

//? Interface is generally connected to objects.
//? Type alias is more connected to literals, unions, tuples, primitives.

type Id = number;
//! interface Id = number

type Role = "admin" | "member";
//! interface "admin" | "member"

interface User {
	name: string;
	role: Role;
	id: Id;
}

const user: User = {
	id: 12,
	name: "Tawhid",
	role: "admin",
};

// TODO: Interface
interface Animal {
	species: string;
}

interface Cat extends Animal {
	breed: string;
}

const cat: Cat = {
	breed: "Persian",
	species: "Felix Catus",
};

//TODO: "&" Intersection
type Veichale = {
	brand: string;
};

type Car = Veichale & {
	//? "&" Symbol for intersection
	model: string;
};

const car: Car = {
	model: "Corolla",
	brand: "Toyota",
};

//* Duplicate Interface... (Merged)
interface IEmployee {
	name: string;
}

interface IEmployee {
	id: number;
}

const employee: IEmployee = {
	id: 123,
	name: "tawhid",
};

//* Duplicate Type.... (Not Valid)
type TEmployee = {
	name: string;
};

//! type TEmployee = {}
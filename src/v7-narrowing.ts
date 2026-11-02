//* "typeof"
let x = 1234;
// console.log(typeof x);

//* Type Guard
const print = (value: number | string) => {
	if (typeof value === "string") {
		return value.toUpperCase();
	} else {
		return value;
	}
};

//* Truthiness
type User = {
	name: string;
	address?: {
		city: string;
	};
	bio: object;
} | null;

const loggedInUser: User = {
	name: "tawhid",
	bio: {},
	address: {
		city: "bogura",
	},
};

const showAddress = (user: User) => {
    if (user && user.address) {
        console.log(user.address.city);
        return
    }
    return "user not found"
}
// * Generic Type in Function
const wrapInArray = <T>(value: T) => {
	return [value];
};

const stringArray = wrapInArray<string>("1232");
const numberArray = wrapInArray<number>(1234567);

stringArray.map((item) => item.toUpperCase());

// * Generic Type in Interface
interface User {
	name: string;
	role: string;
}

interface Blog {
	title: string;
	description: string;
	date: string;
}

interface ApiResponse<T> {
	date: T;
	success: boolean;
	status: number;
}

type UserRes = ApiResponse<User>;
type BlogRes = ApiResponse<Blog>;

const userRes: UserRes = {
	status: 404,
	success: true,
	date: {
		name: "tawhid",
		role: "user",
	},
};

type Test<T> = T;
const string: Test<string> = "Tawhid"
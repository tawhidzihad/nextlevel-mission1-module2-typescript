interface User {
	name: string;
	role: string;
}

interface ApiResponse<T> {
	date: T;
	success: boolean;
	status: number;
	message: string;
}

const fetchUser = async (): Promise<User | undefined> => {
	try {
		const res = await fetch("/api/v1/some-endpoint");
		const data = (await res.json()) as ApiResponse<User>;

		if (!res.ok || !data.success) {
			throw new Error(`Faild to fetch user data ${data.message}`);
		}

		return data.date;
	} catch (err) {
		if (err instanceof Error) {
			console.error(err.message);
		} else {
			console.log("something went wrong");
		}
	}
};

const userData = await fetchUser();

if (userData) {
	console.log(userData.name);
}

const myPromise = new Promise(function (resolve, reject) {
	setTimeout(() => reject("Promise was rejected"), 5000);
});

myPromise.then((value) => console.log(value));
myPromise.catch((error) => console.log(error));

console.log("After the promise");

new Promise((res, rej) => {
	setInterval(() => res("Resolved"), 4000);
})
	.then(
		(data) =>
			new Promise((res, rej) => {
				res(`Resolved with data: ${data}`);
			})
	)
	.then((data) => console.log(data))

	.catch((error) => console.log(error));

// using async/await

function getUser() {
	const user = {
		id: 1,
		name: "John Doe",
		age: 43,
	};
	return new Promise((res, rej) => {
		setTimeout(() => res(user), 4000);
	});
}

function getUserActivity(id) {
	const activities = ["Meet with John", "Grind tomatoes", "Buy a car"];

	return new Promise((res, rej) => {
		setTimeout(() => res(activities[id]), 3000);
	});
}

async function loadUserData() {
	const user = await getUser();
	console.log(user);
	const activity = await getUserActivity(user.id);
	console.log(activity);
}

loadUserData();

function loadTypiCodeData() {
	fetch("https://jsonplaceholder.typicode.com/todos/1")
		.then((response) => response.json())
		.then((json) => console.log(json))
		.catch((error) => console.log(error));
}

async function loadTypiCodeDataWithAsync() {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const json = await res.json();

	console.log(json);
}

loadTypiCodeData();
loadTypiCodeDataWithAsync();

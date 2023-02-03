const clockDiv = document.getElementById('clock');

const getTime = () => {
	let hours = new Date().getHours();
	let minutes = new Date().getMinutes();
	let seconds = new Date().getSeconds();
	clockDiv.innerHTML = `${hours}:${minutes}:${seconds}`;
};

let clock = () => {
	return setInterval(() => {
		getTime();
	}, 1000);
};

clock();

const options = {
	month: "long",
	day: "numeric",
	year: "numeric"
}

const elem1 = document.getElementById('day');
const elem2 = document.getElementById('date');

const dt = new Date()

elem1.innerHTML = dt.getDate();
elem2.innerHTML = dt.toLocaleString("en-US",options);
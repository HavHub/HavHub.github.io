document.addEventListener('DOMContentLoaded', function() {
	let yearTextElem = document.getElementById('current-year-text');
	if (yearTextElem) {
		yearTextElem.innerText = new Date().getFullYear();
	} else {
		console.warn('Can not render current year. Missing #current-year-text element.');
		console.warn('Current year text might be displayed as it was hardcoded.');
	}
});


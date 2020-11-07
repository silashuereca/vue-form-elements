const limitString = function (string, type) {
	if (type === 'description' && string.length > 100) {
		return string.substring(0, 150) + '...';
	}

	if (type === 'heading' && string.length > 50) {
		return string.substring(0, 65) + '...';
	}

	return string;
}

const capFirstLetter = function (string) {
	const first = string.charAt(0).toUpperCase();
	const nameCapitalized = first + string.slice(1);
	return nameCapitalized;
}

export {
	limitString,
	capFirstLetter
}
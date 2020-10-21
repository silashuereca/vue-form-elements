export const limitString = function (string, type) {
	if (type === 'description' && string.length > 100) {
		return string.substring(0, 150) + '...';
	}

	if (type === 'heading' && string.length > 50) {
		return string.substring(0, 65) + '...';
	}

	return string;
}

export default {
	limitString
}
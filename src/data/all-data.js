const forms = require('./projects/forms.json');
const games = require('./projects/games.json');
const animations = require('./projects/animations.json');
const uiux = require('./projects/uiux.json');
const a11y = require('./projects/a11y.json');
const performance = require('./projects/performance.json');

const allData = {
	forms,
	games,
	animations,
	'UI/UX': uiux,
	'A11Y': a11y,
	performance
}

export {
	allData
}
function siteToggle() {
    var bodyColor = document.getElementsByTagName('body')[0];
    var flipper = document.getElementsByClassName('flipper')[0];
    var button = document.getElementById('toggle-button');
    var buttonText = document.getElementsByClassName('button-text')[0];

    bodyColor.classList.toggle('body-color');
	flipper.classList.toggle('flipped');
	buttonText.classList.add('fade-text');

	setTimeout(buttonTextToggle, 500, button);
}

function buttonTextToggle(text) {
	console.log(text);
	if(text.innerText === 'Software') {
		text.innerText = 'Websites';
	} else if(text.innerText === 'Websites') {
		text.innerText = 'Software';
	}
}
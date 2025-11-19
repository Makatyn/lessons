"use strict"

document.addEventListener('click', documentAction)

function documentAction(e) {
	const targetElement = e.target

	if (targetElement.closest('.icon-menu')) {
		document.documentElement.toggleAttribute('data-menu-open')
	}
}
const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

function toggleScrolling() {
	primaryNav.hasAttribute('data-visible')
		? (document.documentElement.style.overflow = 'hidden')
		: (document.documentElement.style.overflow = 'auto');
}

function removeAttribute() {
	primaryNav.removeAttribute('data-visible');
	primaryHeader.removeAttribute('data-overlay');
}

function toggleAttribute() {
	primaryNav.toggleAttribute('data-visible');
	primaryHeader.toggleAttribute('data-overlay');
}

navToggle.addEventListener('click', () => {
	toggleAttribute();
	// disabling scrolling
	toggleScrolling();
});

document.documentElement.addEventListener('click', (e) => {
	if (e.target.className === 'primary-header') {
		removeAttribute();
		toggleScrolling();
	}
});

// slider
const slider = new A11YSlider(document.querySelector('.slider'), {
	adaptiveHeight: false,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3700,
	responsive: {
		641: {
			dots: false,
		},
	},
});

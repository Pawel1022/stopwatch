const colorChangeBtn = document.querySelector('.stopwatch__main-btn--paint');
const infoBtn = document.querySelector('.stopwatch__main-btn--info');
const timer = document.querySelector('.stopwatch__timer');
const startBtn = document.querySelector('.stopwatch__btn--start');
const pauseBtn = document.querySelector('.stopwatch__btn--pause');
const stopBtn = document.querySelector('.stopwatch__btn--stop');
const cancelBtn = document.querySelector('.stopwatch__btn--cancel');
const historyBtn = document.querySelector('.stopwatch__btn--history');
const pageShadow = document.querySelector('.shadow')
const stopwatchInfoBtn = document.querySelector('.stopwatch-info__btn')
const stopwatchInfo = document.querySelector('.stopwatch-info')
const colorChanger = document.querySelector('.color-changer')
const colors = document.querySelectorAll('.color-changer__color')

const startCount = () => {
	let seconds = 0;
	let minutes = 0;
	let hours = 0;

	setInterval(() => {
		seconds++;

		if (seconds === 59) {
			minutes++;
			seconds = 0;
		} else if (minutes === 60) {
			hours++;
			minutes = 0;
		}

		timer.textContent = `${hours}:${minutes}:${seconds}`;
	}, 1000);
};

const toggleInfo = () => {
	pageShadow.classList.toggle('shadow--is-active')
	stopwatchInfo.classList.toggle('stopwatch-info--is-active')
}

const toggleColors = () => {
	pageShadow.classList.toggle('shadow--is-active')
	colorChanger.classList.toggle('color-changer--is-active')
}


startBtn.addEventListener('click', startCount);
infoBtn.addEventListener('click',toggleInfo)
stopwatchInfoBtn.addEventListener('click',toggleInfo)
colorChangeBtn.addEventListener('click',toggleColors)
colors.forEach(object => object.addEventListener('click',toggleColors))


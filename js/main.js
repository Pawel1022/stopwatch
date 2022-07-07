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

const info = () => {
	pageShadow.classList.toggle('shadow--is-active')
}

const pauseCount = () => {};

startBtn.addEventListener('click', startCount);
infoBtn.addEventListener('click',info)
stopwatchInfoBtn.addEventListener('click',info)


export default function initSchedule() {
    const schedule = document.querySelector('[data-week]');
    const daysWeek = schedule.dataset.week.split(',').map(Number);
    const weekTime = schedule.dataset.schedule.split(',').map(Number);
    
    const dateNow = new Date();
    const dayNow = dateNow.getDay();
    const scheduleNow = dateNow.getHours();

    const weekOpen = daysWeek.indexOf(dayNow) !== -1;
    const scheduleOpen = (scheduleNow >= weekTime[0] && scheduleNow < weekTime[1])

    if (weekOpen && scheduleOpen) {
        schedule.classList.add('open');
    }
}
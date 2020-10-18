export default class Schedule {
    constructor(element, activeClass) {
        this.schedule = document.querySelector(element);
        this.activeClass = activeClass;     
    }

    getDataWeek() {
        this.daysWeek = this.schedule.dataset.week.split(',').map(Number);
        this.weekTime = this.schedule.dataset.schedule.split(',').map(Number);
    }

    getDataNow() {
        const brasilaTimezone = 3;
        this.dateNow = new Date();
        this.dayNow = this.dateNow.getDay();
        this.scheduleNow = this.dateNow.getUTCHours() - brasilaTimezone;
    }
    
    isOpen() {
        this.weekOpen = this.daysWeek.indexOf(this.dayNow) !== -1;
        this.scheduleOpen = (this.scheduleNow >= this.weekTime[0] && this.scheduleNow < this.weekTime[1]);
        return this.weekOpen && this.scheduleOpen;
    }        

    init() {
        this.getDataWeek();
        this.getDataNow();
        if (this.isOpen()) {
            this.schedule.classList.add(this.activeClass);
        }
        return this;
    }    
}
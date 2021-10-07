const Calculation = {
    convertDate(date) {
        // format M-d-YYYY hh:m:s
        let timestamp = new Date(date).getTime()
        let now = Date.now();
        return this.convertTime(now - timestamp);
    },

    // convert to time like 1 min, 1 hour, 1 day and so on
    convertTime(time) {
        let timeInSec = time / 1000;
        if(timeInSec > 86400) {
            return Math.round(timeInSec / 86400) + 'd'
        }
        if(timeInSec > 3600) {
            return Math.round(timeInSec / 3600) + 'h'
        }
        if(timeInSec > 60) {
            return Math.round(timeInSec / 60) + 'm'
        }
        return timeInSec + 's'
    }
}

export default Calculation
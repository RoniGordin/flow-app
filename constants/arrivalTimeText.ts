export default (arrivalTime: number) => {
    const hours = Math.floor(arrivalTime / 60);
    const minutes = arrivalTime % 60;
    if (hours > 0) {
        if (hours === 1) {
            return `${hours} hour and ${minutes} minutes`
        } else {
            return `${hours} hours and ${minutes} minutes`
        }
    } else {
        return `${arrivalTime} minutes`
    }
}
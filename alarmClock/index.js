function playAlarm() {
    // var mp3_url = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';
    // var mp3 = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    var mp3 = new Audio('Alarm/alarmSound.mp3');
    mp3.play();
}

const setAlarm = (seconds) => {
    let d = new Date().getTime()
    setTimeout(() => {
        playAlarm()
    }, seconds * 1000)


    setInterval(() => {
        secondsleft = (d + seconds * 1000) - (new Date().getTime())

        if (secondsleft > 0) {
            alarm.innerHTML = "Alarm ringing in " + Math.floor(secondsleft / 1000) + " seconds"
        }
    }, 1000)
}

let s = prompt("How many seconds yo want to play alarm?")

setAlarm(parseInt(s))












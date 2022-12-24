const currtime = document.querySelector('h1'),
    setTime = document.querySelector('.alarmTime'),
    selectMenu = document.querySelectorAll("select"),
    setAlarmBtn = document.getElementById("setAlarm");
    var styleSheet = document.createElement("style");



let alarmTime, isAlarmSet,
    ringtone = new Audio("Alarm/alarmSound.mp3");

//Hours
for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].insertAdjacentHTML('beforeend', option);
}

//Minutes
for (let i = 59; i > 0; i--) {

    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].insertAdjacentHTML('beforeend', option);
}

//AM-PM
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";
    if (h >= 12) {
        h = h - 12;
        ampm = "PM";

    }

    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currtime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime === `${h}:${m} ${ampm}`) {
        ringtone.play();
        ringtone.loop = true;

        var styles = `
        img {
            animation: shake 0.5s;
            animation-iteration-count: infinite;
          }
          
          @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
          }
`

        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)
    }

});

//setAlarmTime
function setAlarm() {

    //stop Alarm
    if (isAlarmSet) {
        alarmTime = ""
        ringtone.pause();
        setAlarmBtn.innerText = "Set Alarm";
        setAlarmBtn.style.color = 'Black';
        var styles = ``
        styleSheet.innerText = styles
        document.head.appendChild(styleSheet)

        let option1 = `<option value="Hours" selected disabled hidden>Hours</option>`;
        selectMenu[0].insertAdjacentHTML('beforeend', option1);

        let option2 = `<option value="Minutes" selected disabled hidden>Minutes</option>`;
        selectMenu[1].insertAdjacentHTML('beforeend', option2);

        let option3 = `<option value="AM/PM" selected disabled hidden>AM/PM</option>`;
        selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option3);

        return isAlarmSet = false;

    }

    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
        return alert("Please, select a valid time to set Alarm!");
    }
    alarmTime = time;
    isAlarmSet = true;
    setAlarmBtn.innerHTML = "Clear Alarm";
    setAlarmBtn.style.color = 'Red';
}
setAlarmBtn.addEventListener("click", setAlarm);














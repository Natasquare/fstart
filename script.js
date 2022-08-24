let $ = (x) => document.querySelector(x),
    ps = (x) => x.toString().padStart(2, '0');

async function upd() {
    let date = new Date(),
        hr = date.getHours();
    $('#gm').innerHTML = hr >= 0 && hr < 12 ? 'morning' : hr === 12 ? 'noon' : hr >= 12 && hr <= 17 ? 'afternoon' : 'evening';
    $('#clock').innerHTML = `${ps(hr)}–${ps(date.getMinutes())}`;
    $('#date').innerHTML = date.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    fetch('https://wttr.in/?0TQFA')
        .then((d) => d.text())
        .then((t) => ($('#wttr').innerHTML = t));
}

upd();
setInterval(upd, 3e4);

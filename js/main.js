const countdown = document.querySelector('.countdown');

//Set Launch Date (ms)
const launchDate = new Date('Jan 1, 2021 13:00:00').getTime();

//Update Every second()
const intvl = setInterval(() =>{
    //Get Today (ms)
    const now = new Date();

    //Distance from now to launch date
    const distance = launchDate - now;

    //Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 *24));
    const hours = Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 *60));
    const mins = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000 );

    //Display time

    countdown.innerHTML  = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

    //If launch date passed
    if(distance < 0){
        //Stop Countdown
        clearInterval(intvl)

        //Style and ouput text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!'
    }
},1000)
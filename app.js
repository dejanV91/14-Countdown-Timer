const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const titleGiveaway= document.querySelector(".titleSection p");
const timer = document.querySelectorAll(".timer h4");
const deadline = document.querySelector(".deadline");

const futureDate= new Date(2024,6,8,21,54);

const futureYear = futureDate.getFullYear();
const futureMonth = futureDate.getMonth();
const futureDay = futureDate.getDate();
const futureHours = futureDate.getHours();
const futureMinutes = futureDate.getMinutes();

const week = futureDate.getDay();

titleGiveaway.textContent = `giveaway ends on ${weekdays[week]}, ${futureDay} ${months[futureMonth]} ${futureYear} ${futureHours}:${futureMinutes}pm`;


const futureTime = futureDate.getTime();



function getRemaining(){
    
    const today = new Date().getTime();
    
    const fullMls= futureTime - today;
    
    const oneDay=24 * 60 * 60 * 1000;
    const oneHours=60 * 60 * 1000;
    const oneMin=60 * 1000;
    const oneSec = 1000; 

    let days = Math.floor(fullMls / oneDay);
    let hours = Math.floor((fullMls%oneDay)/oneHours);
    let minutes = Math.floor((fullMls%oneHours)/oneMin);
    let seconds= Math.floor((fullMls%oneMin) / oneSec );

    const items=[days, hours, minutes, seconds];

    function zero(value){
        if (value < 10) {
            return `0${value}`;
        }
        return value;
    }
    

    timer.forEach(function(value,index){
        value.innerHTML=zero(items[index]);
    });

    if (fullMls < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h2 class="expired">sorry, this giveaway has expired!</h2>`;
    }
    
}



let countdown = setInterval(getRemaining, 1000);


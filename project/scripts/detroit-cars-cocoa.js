
// footer info

const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;


// hamburger menu

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')
const secondnav = document.querySelector('.menu-list')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    secondnav.classList.toggle('show');
})


// array to fill tables

const vendors = [
    {
        vendorName: "Speedway Apparel",
        boothNumber: "1A",
        category: "Clothing",
        timeOpen: "9:00am - 6:00pm",
    },
    {
        vendorName: "American Made",
        boothNumber: "2B",
        category: "Clothing",
        timeOpen: "9:00am - 6:00pm",
    },
    {
        vendorName: "Stanced Parts Supply",
        boothNumber: "3A",
        category: "Accesories",
        timeOpen: "8:00am - 3:30pm",
    },
    {
        vendorName: "Muscle Motors",
        boothNumber: "4B",
        category: "Parts / Service",
        timeOpen: "8:00am - 3:30pm",
    },
    {
        vendorName: "Mike's Pizza & Wings",
        boothNumber: "10B",
        category: "Food",
        timeOpen: "10:00am - 8:00pm",
    },
    {
        vendorName: "Miss Sally's Subs",
        boothNumber: "11A",
        category: "Food",
        timeOpen: "10:00am - 8:00pm",
    },
    {
        vendorName: "Frozen Fun Ice Cream",
        boothNumber: "12B",
        category: "Food",
        timeOpen: "12:00pm - 4:30pm",
    },
];

const container = document.querySelector("#vendor-table");

function createVendorTable(vendor) {

    let row = document.createElement("tr");
    let vendorName = document.createElement("td");
    let boothNumber = document.createElement("td");
    let timeOpen = document.createElement("td");
    let category = document.createElement("td");

    vendorName.textContent = vendor.vendorName;
    boothNumber.textContent = vendor.boothNumber;
    timeOpen.textContent = vendor.timeOpen;
    category.textContent = vendor.category;

    row.append(vendorName);
    row.append(boothNumber);
    row.append(timeOpen);
    row.append(category);

    return row;
    
}

if (container) {
    vendors.forEach(vendor => {
        container.appendChild(createVendorTable(vendor));
    });
}





// confirmation page using localStorage


const registrationsDisplay = document.querySelector(".registrations");

if (registrationsDisplay) {
    let numRegistrations = Number(window.localStorage.getItem("numRegistrations-ls")) || 0;

    if (numRegistrations !== 0) {
        registrationsDisplay.textContent = numRegistrations;
    } else {
        registrationsDisplay.textContent = `Return to registration page to register a vehicle!`;
    }

    numRegistrations++;

    localStorage.setItem("numRegistrations-ls", numRegistrations);
}


// countdown clock

const deadline = "February 23 2026 07:59:59 GMT-0500";


function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    if (!clock) return;
    const daysSpan = clock.querySelector(".days");
    const hoursSpan = clock.querySelector(".hours");
    const minutesSpan = clock.querySelector(".minutes");
    const secondsSpan = clock.querySelector(".seconds");
    function updateClock() {
        const t = getTimeRemaining(endtime); 
        daysSpan.innerHTML = `<span class="time-numbers">${t.days}</span> Days: `;
        hoursSpan.innerHTML = `<span class="time-numbers">${t.hours}</span> Hours: `;
        minutesSpan.innerHTML = `<span class="time-numbers">${t.minutes}</span> Minutes: `;
        secondsSpan.innerHTML = `<span class="time-numbers">${t.seconds}</span> Seconds`;
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}

initializeClock("countdown-clock", deadline);





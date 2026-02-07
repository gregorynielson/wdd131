const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu')
const secondnav = document.querySelector('.menu-list')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    secondnav.classList.toggle('show');
})


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Redlands California",
    location: "Redlands, California, United States",
    dedicated: "2003, September, 14",
    area: 17300,
    imageUrl: 
    "https://churchofjesuschristtemples.org/assets/img/temples/redlands-california-temple/redlands-california-temple-67159.jpg"
  },
  {
    templeName: "Santo Domingo Dominican Republic",
    location: "Santo Domingo, Dominican Republic",
    dedicated: "2000, September, 17",
    area: 67000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1444-main.jpg"
  },
  {
    templeName: "Meridian Idaho",
    location: "Meridian, Idaho, United States",
    dedicated: "2017, November, 19",
    area: 67331,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/meridian-idaho-temple/meridian-idaho-temple-46597-thumb.jpg"
  }
  // Add more temple objects here...
];

const container = document.querySelector("#cards");

function createTempleCard(temple) {

    let card = document.createElement("div");
    let templeName = document.createElement("h2");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");
    
    templeName.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label>Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft.`;
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple.`;
    img.loading = "lazy";

    card.append(templeName);
    card.append(location);
    card.append(dedicated);
    card.append(area);
    card.append(img);

    

    return card;
}

temples.forEach(temple => {
    container.appendChild(createTempleCard(temple));
});

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const pageTitle = document.querySelector("h1");

homeLink.addEventListener("click", () => {

    container.innerHTML = "";

    pageTitle.textContent = "Home";

    temples.forEach(temple => {
        container.appendChild(createTempleCard(temple));
    })
})


oldLink.addEventListener("click", () => {
    let old = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    })

    container.innerHTML = "";

    pageTitle.textContent = "Old";

    old.forEach(temple => {
        container.appendChild(createTempleCard(temple));
    })
})

newLink.addEventListener("click", () => {
    let newTemple = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    })

    container.innerHTML = "";

    pageTitle.textContent = "New";

    newTemple.forEach(temple => {
        container.appendChild(createTempleCard(temple));
    })
})

largeLink.addEventListener("click", () => {
    let large = temples.filter(temple => {
        const size = temple.area;
        return size > 90000;
    })

    container.innerHTML = "";

    pageTitle.textContent = "Large";

    large.forEach(temple => {
        container.appendChild(createTempleCard(temple));
    })
})

smallLink.addEventListener("click", () => {
    let small = temples.filter(temple => {
        const size = temple.area;
        return size < 10000;
    })

    container.innerHTML = "";

    pageTitle.textContent = "Small";


    small.forEach(temple => {
        container.appendChild(createTempleCard(temple));
    })
})




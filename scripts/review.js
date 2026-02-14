const year = document.querySelector("#year");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;



const reviewsDisplay = document.querySelector(".reviews");

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

if (numReviews !== 0) {
    reviewsDisplay.textContent = numReviews;
} else {
    reviewsDisplay.textContent = `Please leave a review!`;
}

numReviews++;

localStorage.setItem("numReviews-ls", numReviews);
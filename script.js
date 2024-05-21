'use strict';

/********** This is to add Event on element *************/

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}


/********** Toggle navbar *************/

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);


/********** header active *************/

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});

/******************FAQ *******************/

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });

  /********** Referral *********** */

  // Generate random referral code
function generateReferralCode() {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
}

// Function to add a referred user to the list
function addReferredUser(name, amount) {
    const list = document.getElementById('referral-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - ${amount}`;
    list.appendChild(listItem);
}

// Function to update total amount gained
function updateTotalAmount(amount) {
    const totalAmount = document.getElementById('total-amount');
    totalAmount.textContent = amount;
}

// Generate referral code on button click
const generateCodeBtn = document.getElementById('generate-code');
generateCodeBtn.addEventListener('click', () => {
    const referralCode = generateReferralCode();
    document.getElementById('referral-code').textContent = referralCode;
});

// Example data of referred users and amounts gained
const referredUsers = [
    { name: 'John Doe', amount: '$10.00' },
    { name: 'Jane Smith', amount: '$15.00' },
    { name: 'Alice Johnson', amount: '$20.00' }
];

// Initialize total amount gained
let totalAmount = 0;

// Add referred users to the list and calculate total amount gained
referredUsers.forEach(user => {
    addReferredUser(user.name, user.amount);
    totalAmount += parseFloat(user.amount.replace('$', ''));
});

updateTotalAmount('$' + totalAmount.toFixed(2));

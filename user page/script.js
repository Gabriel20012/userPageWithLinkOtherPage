'use strict'
//calling html elements in constants
const yourName = document.querySelector('.input-name');
const yourSurName = document.querySelector('.input-surname');
const moreAbout = document.querySelector('.input-more');
const btnSent = document.querySelector('#sent');
const sent = document.querySelector('.success-container');
const btnContinue = document.querySelector('#btn-continue');
const messSuccess = document.querySelector('.message-success');
let progress = document.querySelector('.int-progress');

//random number
let randomExampleNumber = Math.trunc(Math.random() * 1000) + 1;
let dayGoal = 1000;
let prog = 100;
let result = (randomExampleNumber / dayGoal) * prog;


//senting data
btnSent.addEventListener('click', function () {
    if (yourName.value && yourSurName.value) {
        sent.classList.remove('hidden');
        messSuccess.textContent = `Welcome 
        ${yourName.value} ${yourSurName.value}, you are the ${randomExampleNumber} member of today, 
        remain ${dayGoal - randomExampleNumber} member to complete the day goal, lets start the new game , (${result.toFixed(0)}%)`;;
        progress.style.width = result + '%';
    }
});


//contue after sendig the data
btnContinue.addEventListener('click', function () {
    sent.classList.add('hidden');
    yourName.value = '';
    yourSurName.value = '';
    moreAbout.value = '';
});



//Set Product Menu Variables
var productsMain = document.getElementById('products-list');
var productsSub = document.querySelector('.products-sub');
console.log(productsMain);

//Make the menu drop down
function dropdown() {
  productsSub.classList.add('show-menu');
}
productsMain.addEventListener('mouseover', dropdown);

//Get the menu to hide
function disappear() {
  productsSub.classList.remove('show-menu');
}
productsMain.addEventListener('mouseleave', disappear);

//Set up Services varibles
var servicesMain = document.getElementById('services-list');
var servicesSub = document.querySelector('.services-sub');

//Add services dropdown menu
function dropdown2() {
  servicesSub.classList.add('show-menu');
}
servicesMain.addEventListener('mouseover', dropdown2);

//Make services hide
function disappear2() {
  servicesSub.classList.remove('show-menu');
}
servicesMain.addEventListener('mouseleave', disappear2);

//Set up company vairbales
var companyMain = document.getElementById('company-list');
var companySub = document.querySelector('.company-sub');

//Access drop down for company
function dropdown3() {
  companySub.classList.add('show-menu');
}
companyMain.addEventListener('mouseover', dropdown3);

//Hide company
function disappear3() {
  companySub.classList.remove('show-menu');
}
companyMain.addEventListener('mouseleave', disappear3);

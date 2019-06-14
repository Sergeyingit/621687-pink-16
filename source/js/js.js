var pageHeader = document.querySelector('.page-header');
var mainNavigation = document.querySelector('.main-navigation');
var toggleNavigation = document.querySelector('.main-navigation__toggle');

pageHeader.classList.remove('page-header--nojs');
mainNavigation.classList.remove('main-navigation--nojs');

toggleNavigation.addEventListener('click', function () {
  if (mainNavigation.classList.contains('main-navigation--closed')) {
    mainNavigation.classList.remove('main-navigation--closed');
    mainNavigation.classList.add('main-navigation--opened');
  } else {
    mainNavigation.classList.add('main-navigation--closed');
    mainNavigation.classList.remove('main-navigation--opened');
  }
});

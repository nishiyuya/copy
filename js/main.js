'use strict'

// hunbrger
let burger = $(".burger");

burger.click(function () {
    $(".header-nav").fadeToggle(300);
    burger.toggleClass('active');
});
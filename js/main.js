
$(function(){

    $('.questions__item').on('click', function(){
        $('.questions__item').removeClass('questions__item--active');
        $(this).toggleClass('questions__item--active');
        //$(this).removeClass('questions__item--active');
    });
    $('.calculator__select-button').on('click', function(){
        $('.calculator__select-button').toggleClass('calculator__select-button--active');
    });

    $('.nav__btn').on('click', function(){
        $('.nav__btn').toggleClass('nav__btn--active');
        $('.header__items').toggleClass('header__items--active');
    });
});


let sumLising = document.getElementById('sum-lising');
let slider = document.getElementById('rangeSlider');
let output = document.getElementById('value');
let inputValueMax = document.querySelector('input__advance-max');

function buttonUp() {
    sumLising.addEventListener('keydown', function(e){
        if(e.keyCode === 13){
            // to get input
        let getInput = document.getElementById('sum-lising').value;
        let changeInput = slider.setAttribute('max', getInput);
       // let addText = getInput + ' руб';
       // inputValueMax.innerHTML = addText;
    }
});
};
buttonUp()




output.innerHTML = slider.value;


slider.oninput = function() {
    output.value = this.value;
   
    slider.addEventListener('mousemove', function() {
        var x = slider.value;
        var color = 'linear-gradient(90deg, rgb(58,118,240)'+ x + '%, rgb(230,236,244)' + x +'%)';
        slider.style.background = color;
    });
};




slider.rangeslider({
      polyfill: false
     }).on('input', function() {
        output[0].value = this.value;
     });

output.on('input', function(){
    slider.val(this.value).change();
});


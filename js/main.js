
$(function(){
    $('.questions__item').on('click', function(){
        $('.questions__item').removeClass('questions__item--active');
        $(this).toggleClass('questions__item--active');
        //$(this).removeClass('questions__item--active');
    });
    $('.calculator__select-button').on('click', function(){
        $('.calculator__select-button').toggleClass('calculator__select-button--active');
    });
});

let sumLising = document.getElementById('sum-lising')
let slider = document.getElementById('rangeSlider');
let output = document.getElementById('value');

output.innerHTML = slider.value;

slider.oninput = function() {
    output.placeholder = this.value;

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

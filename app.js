
$('.circle').click( function () {
    $('full').removeClass('circle')
    $(this).toggleClass('full')
})



$('.square1').click( function () {
    $('.line1').children().toggleClass('full')
})

$('.square2').click( function () {
    $('.line2').children().toggleClass('full')
})

$('.square3').click( function () {
    $('.line4').children().toggleClass('full')
})

$('.square4').click( function () {
    $('.line5').children().toggleClass('full')
})

// fulfill lines and columns if .losange is onClick

$('.losange').click( function () {
    $('.line3').children().toggleClass('full')
    $('#circle1').toggleClass('full')
    $('#circle2').toggleClass('full')
    $('#circle3').toggleClass('full')
    $('#circle4').toggleClass('full')

})
//Global Variables
var curId;
$('#pressBlue').click(function () {
    $('#one').css({
        display: 'block'
    })
    $('#two, #three').css({
        display: 'none'
    })
    addMe($(this));
})
$('#pressPink').click(function () {
    $('#two').css({
        display: 'block'
    })
    $('#one, #three').css({
        display: 'none'
    })
    addMe($(this));
})
$('#pressGreen').click(function () {
        $('#three').css({
            display: 'block'
        })
        $('#one, #two').css({
            display: 'none'
        })
        addMe($(this));
    })
    //Set timer
setInterval(() => {

}, 2000);

function addMe(head) {
    $('li').removeClass('active');
    head.parent('li').addClass('active');
    curId = head.attr('id');
}

function hitNext(idName) {
    switch (idName) {
    case 'pressBlue':
        $('#one').css({
            display: 'block'
        })
        $('#two, #three').css({
            display: 'none'
        })
        break;
    case 'pressPink':
        $('#two').css({
            display: 'block'
        })
        $('#one, #three').css({
            display: 'none'
        })
        break;
    case 'pressGreen':
        $('#three').css({
            display: 'block'
        })
        $('#one, #two').css({
            display: 'none'
        })
        break;
    default:
    }
}
$('#next').click(function () {
    if (curId == 'pressGreen') {
        $('li.active').removeClass('active');
        $('#previous').parent().addClass('active');
    }
    $('li.active').removeClass('active').next().addClass('active');
    if ($('li.active')) {
        curId = $('li.active a').attr('id');
        hitNext(curId);
    }
})
$('#previous').click(function () {
    if (curId === 'pressBlue') {
        $('li.active').removeClass('active');
        $('#next').parent().addClass('active');
    }
    $('li.active').removeClass('active').prev().addClass('active');
    if ($('li.active')) {
        curId = $('li.active a').attr('id');
        hitNext(curId);
    }
})

var city = 'Big Sky';
var state = 'CO';
var cloud = 'fa-cloud';
var sun = 'fa-sun-o';
var rain = 'fa-tint';
var snow = 'fa-snowflake-o'

var weather = $.ajax(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=4f3823bf42f5cb17d953b5de50085cc1`)
.done(function(){
    var temp = Math.round(weather.responseJSON.main.temp);
    var desc = weather.responseJSON.weather[0].main;
    console.log(desc)
    if(desc =='Clouds') {
        $('i').addClass(cloud);
        $('i').removeClass(sun).removeClass(rain).removeClass(snow);
    }
    else if(desc == 'Clear') {
        $('i').removeClass(cloud).removeClass(snow).removeClass(rain);;
        
        $('i').addClass(sun);
    }
    else if(desc == 'Rain') {
        $('i').addClass(rain);
        $('i').removeClass(cloud).removeClass(sun).removeClass(snow);
    }
    else if(desc == 'Snow') {
        $('i').addClass(snow);
        $('i').removeClass(cloud).removeClass(sun).removeClass(rain);
        
    }
    else {
        $('i').addClass(sun);
    }
    
    $('.city').html(city+','+state);
    $('.temp').html(temp+'&deg;F');
})
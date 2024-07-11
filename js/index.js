/// <reference types = "../@types/jquery/" />


    $(".open").on("click", function() {
        $(".links").animate({width: 'show'}, 500);
        $(".content-header").animate({marginLeft : "250px"} , 500)
        $('.open').animate({left:'21%'},500)
    });

    $("#close").on("click", function() {
        $(".links").animate({width: 'hide'}, 500) 
        $(".content-header").animate({marginLeft : "0"} , 500)
        $('.open').animate({left:'10px'},500)
    });

    $('.links a').on('click',function(){
        let section = $(this).attr('href');
        let ofssetTop = $(section).offset().top;
        $('body , html').animate({scrollTop:ofssetTop} , 1000);
        
        console.log(section)
        console.log(ofssetTop)
    })
   
    $('.singer h3').on('click',function(){
        $(".singer p").not($(this).next("p")).slideUp();
        $(this).next('p').slideToggle(500)
    })


    $(document).ready(function(){   
        let event = new Date('20 october 2025 9:00:00').getTime()
        let x = setInterval(function(){
                let now = new Date().getTime();
                let distance = event - now;
                let days = Math.floor(distance /(1000*60*60*24))
                let hours = Math.floor(distance % (1000*60*60*24)/(1000*60*60))
                let min = Math.floor(distance%(1000*60*60)/(1000*60))
                let second = Math.floor(distance%(1000*60)/(1000))
    
                $('#days').text(days + 'D')
                $('#hours').text(hours + 'H')       
                $('#min').text(min + 'M')
                $('#seconds').text(second + 'S')
        },1000)
    })

    
    $('#message').on('input',function(){
        var maxChars = 100;
        var currentChars = $(this).val().length;    
        $('.char').text(maxChars - currentChars)
        if(currentChars > 100){
            $('.count').text("Can't type more")
            $('.char').text('')
            $(this).val($(this).val().substring(0, maxChars));
        }
        else{
            var currentChars = $(this).val().length;
            console.log(currentChars)
            $('.char').text(maxChars - currentChars);
            $('.count').text('Characyer Reamining')
        }
    })

 


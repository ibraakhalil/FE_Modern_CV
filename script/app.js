$(document).ready(function(){


    $("#profile-ripple").ripples({
        resolution:512,
        dropRadius:10
    })



    let bars = document.querySelectorAll("section.skills .right .progress-bar");
    bars.forEach(function(bar){
        let percent = bar.dataset.percent;
        let tooltip = bar.children[0];

        tooltip.innerHTML = percent + "%";
        bar.setAttribute("style", `width:${percent}%`)
    })




    function numCounter(){
        let counters = document.querySelectorAll(".counter-section .counter");

        for (let i = 0; i < counters.length; i++) {
            let spanCounter = 0;
            
            let total = counters[i].dataset.counter;
            let howMany =Math.round(total/18);
            let interval = setInterval(() => {
                spanCounter += howMany;
                if (spanCounter >= total) {
                    spanCounter = total;
                    clearInterval(interval)
                }
                counters[i].innerText= spanCounter;
            }, 50);
        }
    }

    let counterSection = document.querySelector(".counter-section")
    let options = {rootMargin : "0px 0px -200px 0px"}
    let done = 0;
    let observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting && done!==1){
            done = 1;
            numCounter();
        }
    },options)
    observer.observe(counterSection);






    var $wrapper = $(".portfolio-wrapper");
    $wrapper.isotope({
        filter : "*",
        layoutMode : "masonry",
        animationOptions : {
            duration : 750,
            easing : "linear"
        }
    })

    let links = document.querySelectorAll(".tabs a");

    links.forEach(link => {
        link.addEventListener("click",function(e){
            e.preventDefault();
            
            $wrapper.isotope({
                filter : e.target.dataset.filter,
                layoutMode : "masonry",
                animationOptions : {
                    duration : 750,
                    easing : "linear"
                }
            })

            links.forEach(link =>{
                link.classList.remove("active");
            })
            link.classList.add("active");

        })
    })



    $(".magnify").magnificPopup({
        type : "image",
        mainClass: 'mfp-with-zoom',
        gallery : {
            enabled : true
        },
        zoom : {
            enable : true
        }
    });


    $('.slider').slick({
        arrows: false,
        autoplay: true
    });










});







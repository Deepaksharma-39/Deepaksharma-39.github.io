document.getElementById("resume1").addEventListener("click",()=>{
    window.open("https://drive.google.com/file/d/1wdZQBPUXc2S2EbuchucyKvKpRD0VFdnV/view?usp=share_link",'_blank')
  })

  document.getElementById("resume2").addEventListener("click",()=>{
    window.open("https://drive.google.com/file/d/1wdZQBPUXc2S2EbuchucyKvKpRD0VFdnV/view?usp=share_link",'_blank')
  })


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY>500){
            $('.scroll-up-button').addClass("show")
        }else{
            $('.scroll-up-button').removeClass("show")
        }
    });

    // menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })


    // slide up

    $('.scroll-up-button').click(function(){
        $('html').animate({scrollTop: 0});
    })


    // typing animation
    let typed=new Typed(".typing",{
        strings: ["Deepak Sharma","Web Developer","Backend Developer"],
        typeSpeed: 100,
        backSpeed: 90,
        loop:true
    })

    

})



window.addEventListener("hashchange", function(event){
    console.log(window.location.hash);
    
    $(".navitem").removeClass("active");
    $(window.location.hash).addClass("active");


})
window.addEventListener("hashchange", function(event){
    
    $(".navitem").removeClass("active");
    $(window.location.hash).addClass("active");


})
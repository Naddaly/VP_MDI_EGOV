function initializePartitialLoad(){
    $(".partitial-load").unbind("click");

    $(".partitial-load").bind("click", function(event){
        let element = this;
        let target_div = $(element).data("target");
        let partitial_url = $(element).data("href");
        let nav_item = $(element).data("nav");
        
        if(typeof(nav_item) != "undefined"){
            window.location.hash = nav_item;
        }
        
        $.get(partitial_url, function (data){
            $(target_div).html(data);
        })
        
    });
    
}

window.onload = function(){
    initializePartitialLoad();
}
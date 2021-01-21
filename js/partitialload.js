
function initializePartitialLoad(){
    $(".partitial-load").unbind("click");

    $(".partitial-load").bind("click", function(event){
        let element = this;
        let target_div = $(element).data("target");
        let partitial_url = $(element).data("href");
        
        $.get(partitial_url, function (data){
            $(target_div).html(data);
        })
        
    });
    
}

window.onload = function(){
    initializePartitialLoad();
}
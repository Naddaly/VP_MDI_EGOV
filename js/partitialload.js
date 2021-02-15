function initializePartitialLoad(){
    $(".partitial-load").unbind("click");

    $(".partitial-load").bind("click", function(event){
        let element = this;
        let missing_fields = [];
        
        let target_div = $(element).data("target");
        let partitial_url = $(element).data("href");
        let nav_item = $(element).data("nav");
        
        if(!$(this).hasClass("disable-require")){
            $("input[type=text].required").each(function(){
                let element = this;
                
                if($(element).val().trim() === ""){
                    missing_fields.push("Bitte das Feld "+$(element).data("required-name")+" ausfüllen!")
                }
        
            });
    
            let required_radios = [];
            $("input[type=radio].required").each(function() {
        
                let radioName = $(this).attr("name");
        
                if (!required_radios.includes(radioName)) {
                    required_radios.push(radioName);
                }
            });
    
            $(required_radios).each(function(index, radioName){
                let val = $("input[name="+radioName+"]:checked").val();
        
                if(val == undefined || val.trim() == ""){
                    missing_fields.push("Bitte das Feld "+$("input[name="+radioName+"]").data("required-name")+" angeben!")
                }
        
            });
    
        }
        
       
        
    
        if(missing_fields.length > 0){
            alert(missing_fields.join("\n"))
        }else{
            
            if($(this).data("alert") !== undefined){
                alert($(this).data("alert"));
            }
            if($(this).data("confirm") !== undefined){
                let res = confirm($(this).data("confirm"));
                if(!res){
                    return false;
                }
            }
            
            if(typeof(nav_item) != "undefined"){
                window.location.hash = nav_item;
            }
    
            if(target_div == "_blank"){
                window.location.href = partitial_url;
            }else{
                $.get(partitial_url, function (data){
                    $(target_div).html(data);
                })
            }
            
        }
        
    });
    
}

$( document ).ready(function() {
    initializePartitialLoad();
});
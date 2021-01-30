var rightAnswers = 0;

function evaluatequiz(){
    
    $("#quiz1-1, #quiz2-2, #quiz3-1, #quiz4-1, #quiz5-2, #quiz6-1").each(function(index){
    
        if($(this).prop("checked")){
            rightAnswers++;
        }
    
    
    });
}
var index = 0;

function loadImage(indexChange){

    if(index == 0){
        if(indexChange == 1) {
            $("#imagetarget").prop("src", "media/AusweisApp/AusweisApp_Wo.png");
            $("#tutorialbackwardbutton").removeClass("hide");
            index++;
        }
    }else if(index == 1){
        if(indexChange == 1){
            $("#imagetarget").prop("src", "media/AusweisApp/AusweisApp_Wie.png");
            $("#tutorialforwardbutton").addClass("hide");
            index++;
        }else if(indexChange == -1){
            $("#imagetarget").prop("src", "media/AusweisApp/AusweisApp_Was.png");
            $("#tutorialbackwardbutton").addClass("hide");
            index--;
        }
    }else{
        if(indexChange == 1){
            $("#imagetarget").prop("class", "hide");
            $("#loginbutton").html("Anmelden");
        }else if(indexChange == -1){
            $("#imagetarget").prop("src", "media/AusweisApp/AusweisApp_Wo.png");
            $("#tutorialforwardbutton").removeClass("hide");
            index--;
        }
        
    }
    
}

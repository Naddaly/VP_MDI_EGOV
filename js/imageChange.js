var index = 0;

function loadImage(){
    if(index == 0){
        $("#imagetarget").prop("src", "media/AusweisApp/AusweisApp_Wo.png");
    }else if(index == 1){
        $("#imagetarget").prop("src", "media/AusweisApp/AusweisApp_Wie.png");
    }else{
        $("#imagetarget").prop("class", "hide");
        $("#tutorialbutton").prop("class", "hide");
        $("#loginbutton").html("Anmelden");
    }
    index++;
}

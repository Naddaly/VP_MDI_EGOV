let filldata = {
    "gemeinde": "Lübeck",
    "first_name": "Max",
    "last_name": "Mustermann",
    "birth_name": "",
    "birth_date": "01.01.2000",
    "birth_place": "Lübeck",
    "citizenship": "Deutschland",
    "family_status": "ledig",
    "gender": "männlich",
    "phone_number": "0123456789",
    "occupation": "Student",
    "income_type": "Demoeinkommen",
    "income_value": "Demowert"
};

function initalizeAutofill(){
    
    $("input.fillme").bind("click", function(){
        $(this).val( filldata[ $(this).attr("name") ]   )
    });
    
}

$( document ).ready(function() {
    initalizeAutofill();
});
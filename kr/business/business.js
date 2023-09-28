function alertEvent() {
    alert("Event!!!!");
}

function viewField(field) {
    if (field == 1) {
        document.getElementById("field-section1").style.display ='block';		
        document.getElementById("field-section2").style.display ='none';
        document.getElementsByClassName("field1")[0].style.backgroundColor="#44a2fa";
        document.getElementsByClassName("field2")[0].style.backgroundColor="gray";
    } else if (field == 2) {
        document.getElementById("field-section1").style.display ='none';		
        document.getElementById("field-section2").style.display ='block';
        document.getElementsByClassName("field1")[0].style.backgroundColor="gray";
        document.getElementsByClassName("field2")[0].style.backgroundColor="#44a2fa";
    }
    
}

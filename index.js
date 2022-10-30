$(function() {  
    $("#btnCheck").click(function() {  
        var txt = $("#txtName");
        var txt2 = $("#txtName2");  
        if ((txt.val() != null && txt.val() != '') && (txt2.val() != null && txt2.val() != '')) {  
            alert("you entered text " + txt.val() +" "+ txt2.val())  
        } else {  
            alert("Please fill all the fields")  
        }  
    })  
}); 
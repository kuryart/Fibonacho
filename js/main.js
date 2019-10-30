var btnSubmit = document.getElementById("btnSubmit");
var nachosCounter = document.getElementById("nachosCounter");
 
btnSubmit.addEventListener('click', showNachosCounter, false)

function showNachosCounter() 
{
    var position = document.getElementById("position");
    var label = document.getElementById("nachosCounter");

    $.ajax({
        url: "FibonachoAPI/FibonachoAPI.php",
        type: "POST",
        data: "position=" + position.options[position.selectedIndex].value,
        dataType: "html"

        }).done(function(resposta) { 
            if (resposta != "InvalidInput") 
            {
                label.innerText = "x" + resposta;
            }
        }).fail(function(jqXHR, textStatus ) {
            label.innerText = "x0";
            console.log("Request failed: " + textStatus);
        });
}
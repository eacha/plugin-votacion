    var greeting = "hello, ";   
    var button
    window.onload = function(){
    	button =  document.getElementById("mybutton");
	button.person_name = "Bob";
	button.addEventListener("click", function() {
        alert(greeting + button.person_name + ".");
        }, false);

    }
    console.log(hola);

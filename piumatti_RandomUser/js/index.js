"use strict";

window.onload = function () {
	let slider = $("#myRange");
	let utenti = $("#lblUtenti");
	utenti.text("Numero di utenti generati: " + slider.val())
	slider.on("change",function(){
		utenti.text("Numero di utenti generati: " + slider.val())
	})
    let richiesta = inviaRichiesta("GET", "https://randomuser.me/api?results=5&gender=male");   
	richiesta.done(function (data) {
		alert(JSON.stringify(data));
		console.log(data);		
	});
	richiesta.fail(error);
}

"use strict";
let img = $("<img>");
window.onload = function () {
	let slider = $("#myRange");
	let utenti = $("#lblUtenti");
	let current = $("#currentUser");
	let gender = $("#myCheckbox")
	let currentName = $("#currentName")
	let thumbNail = $("#immagine");
	let img = $("#currentImg");
	let frecciaDestra = $("#frDx");
	let frecciaSinistra= $("#frSx");
	let genderStr = "";
	let Nome = $("#nome");
	let email = $("#email");
	let dataNasc = $("#dataNasc");
	let map = $("#address");
	let cell = $("#cell");
	let password = $("#password");
	
	current.text("User 1 of " + slider.val())
	utenti.text("Numero di utenti da generare: " + slider.val())

	slider.on("change",function(){
		utenti.text("Numero di utenti da generare: " + slider.val())
		if (slider.val()==1) {
			current.text("User 1 of " + slider.val())
		}else{
			current.text("User ... of " + slider.val())
		}
	
	})
    let richiesta = inviaRichiesta("GET", "https://randomuser.me/api?results="+ slider.val());   
	richiesta.done(function (data) {
		let Users = data.results;
			console.log(Users)
			for (const user of Users) {
				currentName.text("Hi! My name is : " +  user.name.title + " " + user.name.last) ;
				img.prop("src",user.picture.large);
				Nome.on("mouseenter",function(){
					currentName.text("Hi! My name is : "  +user.name.title + " " + user.name.last) ;
				})
				email.on("mouseenter",function(){
					currentName.text(user.email) ;
				})
				dataNasc.on("mouseenter",function(){
					currentName.text("I am  " +  user.dob.age + " years old") ;
				})
				map.on("mouseenter",function(){
					currentName.text("I live in:   " +  user.location.country) ;
				})
				cell.on("mouseenter",function(){
					currentName.text("Cell:  " +  user.cell) ;
				})
				password.on("mouseenter",function(){
					currentName.text("My password:   " +  user.login.password) ;
				})

				email.on("mouseleave",function(){
					currentName.text("Hi! My name is : "  +user.name.title + " " + user.name.last) ;
				})
				dataNasc.on("mouseleave",function(){
					currentName.text("Hi! My name is : "  +user.name.title + " " + user.name.last) ;
				})
				map.on("mouseleave",function(){
					currentName.text("Hi! My name is : "  +user.name.title + " " + user.name.last) ;
				})
				cell.on("mouseleave",function(){
					currentName.text("Hi! My name is : "  +user.name.title + " " + user.name.last) ;
				})
				password.on("mouseleave",function(){
					currentName.text("Hi! My name is : "  +user.name.title + " " + user.name.last) ;
				})
				
				frecciaDestra.on("click",function(){

				})
				frecciaSinistra.on("click",function(){
					
				})
				
			}
			
	});
	richiesta.fail(error);

	let btnSubmitRequest = $("#submit");

	btnSubmitRequest.on("click",function(){
		let all = $("#chkAll");
		let uomo = $("#chkUomo");
		let donna = $("#chkDonna");

		if (all.is(":checked")) {
			genderStr = "";
		}else if(donna.is(":checked")== true){
			genderStr += "female"; 
		}else if(uomo.is(":checked")==true){
			genderStr += "male";
		}

		let richiesta = inviaRichiesta("GET", "https://randomuser.me/api?results="+ slider.val()+"?gender=" + genderStr);   

		richiesta.done(function (data) {
			let Users = data.results;
			console.log(Users)
			for (const user of Users) {
				currentName.text("Hi! My name is : " +  user.name.title + " " + user.name.last);
				img.prop("src",user.picture.large);
				frecciaDestra.on("click",function(){
					
				})
				frecciaSinistra.on("click",function(){
					
				})
			}

		});
		richiesta.fail(error);
	})
}

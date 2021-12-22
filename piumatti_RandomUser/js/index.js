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
	let all = $("#chkAll");
	let uomo = $("#chkUomo");
	let donna = $("#chkDonna");
	let nationalities = "";
	let usa = $("#chkUs");
	let gbrt = $("#chkBr");
	let det = $("#chkGer");
	let brasile = $("#chkIt");
	let francia = $("#chkFr");
	
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
	all.on("click",function(){
		donna.prop("checked",false);
		uomo.prop("checked",false);
	})
	donna.on("click",function(){
		all.prop("checked",false);
		uomo.prop("checked",false);
	})
	uomo.on("click",function(){
		all.prop("checked",false);
		donna.prop("checked",false);
	})
	btnSubmitRequest.on("click",function(){
		 all = $("#chkAll");
		 uomo = $("#chkUomo");
		 donna = $("#chkDonna");
		 genderStr= "";

		if (all.prop("checked")) {
			genderStr = "";
		}else if(donna.prop("checked")){
			genderStr += "female"; 
		}else if(uomo.prop("checked")){
			genderStr += "male";
		}

		usa = $("#chkUs");
	    gbrt = $("#chkBr");
	    det = $("#chkGer");
	    brasile = $("#chkIt");
	    francia = $("#chkFr");
		nationalities = "";
		if (usa.prop("checked")) {
			if (nationalities!="") {
				nationalities += ",us"
			}else{
				nationalities += "us"
			}
			
		}
		if (francia.prop("checked")) {
			if (nationalities!="") {
				nationalities += ",fr"
			}else{
				nationalities += "fr"
			}
			
		}
		if (brasile.prop("checked")) {
			if (nationalities!="") {
				nationalities += ",br"
			}else{
				nationalities += "br"
			}
			
		}
		if (det.prop("checked")) {
			if (nationalities!="") {
				nationalities += ",de"
			}else{
				nationalities += "de"
			}
			
		}
		if (gbrt.prop("checked")) {
			if (nationalities!="") {
				nationalities += ",gb"
			}else{
				nationalities += "gb"
			}
			
		}

		let richiesta = inviaRichiesta("GET", "https://randomuser.me/api?results="+ slider.val()+"&gender=" + genderStr + "&nat=" + nationalities);   
		let str = "https://randomuser.me/api?results="+ slider.val()+"&gender=" + genderStr;
		let str2 ="https://randomuser.me/api?results="+ slider.val()+"&gender=" + genderStr + "&nat=" + nationalities;
		console.log(str2);
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

"use strict";

//declarations and jquery pointers
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
	
	//init code
	current.text("User 1 of " + slider.val())
	utenti.text("Numero di utenti da generare: " + slider.val())

	slider.on("change",function(){
		utenti.text("Numero di utenti da generare: " + slider.val())
		if (slider.val()==1) {
			current.text("User 1 of " + slider.val())
		}else{
			current.text("User 1 of " + slider.val())
		}
	})

	//at onload request
	let richiesta = inviaRichiesta("GET", "https://randomuser.me/api?results="+ slider.val()+"&gender=" + genderStr + "&nat=" + nationalities);   
	let str = "https://randomuser.me/api?results="+ slider.val()+"&gender=" + genderStr;
	let str2 ="https://randomuser.me/api?results="+ slider.val()+"&gender=" + genderStr + "&nat=" + nationalities;
	console.log(str2);
	richiesta.done(function (data) {
		let Users = data.results;
		console.log(Users);
		let i = 0;
		currentName.text("Hi! My name is : " +  Users[i].name.title + " " + Users[i].name.last);
		img.prop("src",Users[i].picture.large);
		email.on("mouseenter",function(){
			currentName.text(Users[i].email) ;
		})
		dataNasc.on("mouseenter",function(){
			currentName.text("I am  " +  Users[i].dob.age + " years old") ;
		})
		map.on("mouseenter",function(){
			currentName.text("I am from:   " +  Users[i].location.country) ;
		})
		cell.on("mouseenter",function(){
			currentName.text("Cell:  " +  Users[i].cell) ;
		})
		password.on("mouseenter",function(){
			currentName.text("My password:   " +  Users[i].login.password) ;
		})

		email.on("mouseleave",function(){
			currentName.text("Hi! My name is : "  +Users[i].name.title + " " + Users[i].name.last) ;
		})
		dataNasc.on("mouseleave",function(){
			currentName.text("Hi! My name is : "  +Users[i].name.title + " " + Users[i].name.last) ;
		})
		map.on("mouseleave",function(){
			currentName.text("Hi! My name is : "  +Users[i].name.title + " " + Users[i].name.last) ;
		})
		cell.on("mouseleave",function(){
			currentName.text("Hi! My name is : "  +Users[i].name.title + " " + Users[i].name.last) ;
		})
		password.on("mouseleave",function(){
			currentName.text("Hi! My name is : "  +Users[i].name.title + " " + users[i].name.last) ;
		})
		frecciaDestra.on("click",function(){
			i++;
			if (i==slider.val()-1) {
				i=1;
			}
			current.text("User " + i + " of " + slider.val());
			currentName.text("Hi! My name is : " +  Users[i].name.title + " " + Users[i].name.last);
			img.prop("src",Users[i].picture.large);
		})
		frecciaSinistra.on("click",function(){
			i--;
			if (i<=0) {
				i=slider.val()-1;
			}
			current.text("User " + i + " of " + slider.val());
			currentName.text("Hi! My name is : " +  Users[i].name.title + " " + Users[i].name.last);
			img.prop("src",Users[i].picture.large);
			
		})
		/*for (const user of Users) {
		
			//currentName.text("Hi! My name is : " +  user.name.title + " " + user.name.last);
			//img.prop("src",user.picture.large);
			
		}
*/
for (let item of Users){
	let name = item.name.first + " " + item.name.last
	let code = item.nat
	let country = item.location.country
	let state = item.location.state
	let cell = item.cell
	let path = item.picture.thumbnail

	let tr=$("<tr>");
	tr.appendTo("table tbody");
	$("<td>").appendTo(tr).text(name);
	$("<td>").appendTo(tr).text(code);
	$("<td>").appendTo(tr).text(country);
	$("<td>", {
		"text":state,
		"appendTo":tr
	})
	//$("<td>").appendTo(tr).text(cell);

	$("<td>", {
		"text":cell,
		"appendTo":tr
	})

	let img = $("<img>").prop("src", path).css("width","40px");
	$("<td>").appendTo(tr).append(img);
}

//$('table').DataTable();

	$('#tableT').DataTable( {

	  "bPaginate": true,     // paginazione dei record da visualizzare
	  "bLengthChange": true, // n. di record per pagina
	  "bFilter": true,       // ricerca della voce impostata
	  "bSort": true,         // ordinamento dei record sul click on the header
	});
})
	richiesta.fail(error);

	// when the button is clicked request
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
			console.log(Users);
			for (let item of Users){
				let name = item.name.first + " " + item.name.last
				let code = item.nat
				let country = item.location.country
				let state = item.location.state
				let cell = item.cell
				let path = item.picture.thumbnail
			
				let tr=$("<tr>");
				tr.appendTo("table tbody");
				$("<td>").appendTo(tr).text(name);
				$("<td>").appendTo(tr).text(code);
				$("<td>").appendTo(tr).text(country);
				$("<td>", {
					"text":state,
					"appendTo":tr
				})
				//$("<td>").appendTo(tr).text(cell);
			
				$("<td>", {
					"text":cell,
					"appendTo":tr
				})
			
				let img = $("<img>").prop("src", path).css("width","40px");
				$("<td>").appendTo(tr).append(img);
			}
			let i = 0;
			currentName.text("Hi! My name is : " +  Users[i].name.title + " " + Users[i].name.last);
			img.prop("src",Users[i].picture.large);
			email.on("mouseenter",function(){
				currentName.text(Users[i].email) ;
			})
			dataNasc.on("mouseenter",function(){
				currentName.text("I am  " +  Users[i].dob.age + " years old") ;
			})
			map.on("mouseenter",function(){
				currentName.text("I am from:   " +  Users[i].location.country) ;
			})
			cell.on("mouseenter",function(){
				currentName.text("Cell:  " +  Users[i].cell) ;
			})
			password.on("mouseenter",function(){
				currentName.text("My password:   " +  Users[i].login.password) ;
			})

			email.on("mouseleave",function(){
				currentName.text("Hi! My name is : "  +Users[i].name.title + " " + Users[i].name.last) ;
			})
			dataNasc.on("mouseleave",function(){
				currentName.text("Hi! My name is : "  +Users[i].name.title + " " + Users[i].name.last) ;
			})
			map.on("mouseleave",function(){
				currentName.text("Hi! My name is : "  +Users[i].name.title + " " + Users[i].name.last) ;
			})
			cell.on("mouseleave",function(){
				currentName.text("Hi! My name is : "  +Users[i].name.title + " " + Users[i].name.last) ;
			})
			password.on("mouseleave",function(){
				currentName.text("Hi! My name is : "  +Users[i].name.title + " " + users[i].name.last) ;
			})
			frecciaDestra.on("click",function(){
				i++;
				if (i>=slider.val()) {
					i=1;
				}
				current.text("User " + i + " of " + slider.val());
				currentName.text("Hi! My name is : " +  Users[i].name.title + " " + Users[i].name.last);
				img.prop("src",Users[i].picture.large);
			})
			frecciaSinistra.on("click",function(){
				i--;
				if (i<=0) {
					i=slider.val();
				}
				current.text("User " + i + " of " + slider.val());
				currentName.text("Hi! My name is : " +  Users[i].name.title + " " + Users[i].name.last);
				img.prop("src",Users[i].picture.large);
				
			})
		
		});
		richiesta.fail(error);
	})
}
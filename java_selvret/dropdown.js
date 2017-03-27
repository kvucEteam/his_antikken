/**
 * @author ato
 */
var korrekt = "<img src='../java_shared/korrekt.gif'/>";
var forkert = "<img src='../java_shared/forkert.gif'/>";


//Dette er et Array - De starter altid ved plads 0
var feedbacktags = document.getElementsByTagName("dfn");
var feedback = document.getElementById("respons");

function check_svar() {
	var forkerte_svar = 0;

	var dd_svar1 = document.getElementById("drop_down1").value;
	var dd_svar2 = document.getElementById("drop_down2").value;
	var dd_svar3 = document.getElementById("drop_down3").value;
	var dd_svar4 = document.getElementById("drop_down4").value;
var dd_svar5 = document.getElementById("drop_down5").value;
var dd_svar6 = document.getElementById("drop_down6").value;
var dd_svar7 = document.getElementById("drop_down7").value;
var dd_svar8 = document.getElementById("drop_down8").value;
var dd_svar9 = document.getElementById("drop_down9").value;
var dd_svar10 = document.getElementById("drop_down10").value;
var dd_svar11 = document.getElementById("drop_down11").value;

	if(dd_svar1 == "true") {
		feedbacktags[0].innerHTML = " <img src='../java_shared/korrekt.gif'/>";

	} else {
		feedbacktags[0].innerHTML = " <img src='../java_shared/forkert.gif'/>";
		forkerte_svar++;
	}
	if(dd_svar2 == "true") {
		feedbacktags[1].innerHTML = " <img src='../java_shared/korrekt.gif'/>";

	} else {
		feedbacktags[1].innerHTML = " <img src='../java_shared/forkert.gif'/>";
		forkerte_svar++;
	}
	
	if(dd_svar3 == "true") {
		feedbacktags[2].innerHTML = " <img src='../java_shared/korrekt.gif'/>";

	} else {
		feedbacktags[2].innerHTML = " <img src='../java_shared/forkert.gif'/>";
		forkerte_svar++;
	}
	if(dd_svar4 == "true") {
		feedbacktags[3].innerHTML = " <img src='../java_shared/korrekt.gif'/>";

	} else {
		feedbacktags[3].innerHTML = " <img src='../java_shared/forkert.gif'/>";
		forkerte_svar++;
	}
	if(dd_svar5 == "true") {
		feedbacktags[4].innerHTML = " <img src='../java_shared/korrekt.gif'/>";

	} else {
		feedbacktags[4].innerHTML = " <img src='../java_shared/forkert.gif'/>";
		forkerte_svar++;
	}
	if(dd_svar6 == "true") {
		feedbacktags[5].innerHTML = " <img src='../java_shared/korrekt.gif'/>";

	} else {
		feedbacktags[5].innerHTML = " <img src='../java_shared/forkert.gif'/>";
		forkerte_svar++;
	}
	if(dd_svar7 == "true") {
		feedbacktags[6].innerHTML = " <img src='../java_shared/korrekt.gif'/>";

	} else {
		feedbacktags[6].innerHTML = " <img src='../java_shared/forkert.gif'/>";
		forkerte_svar++;
	}
	if(dd_svar8 == "true") {
		feedbacktags[7].innerHTML = " <img src='../java_shared/korrekt.gif'/>";

	} else {
		feedbacktags[7].innerHTML = " <img src='../java_shared/forkert.gif'/>";
		forkerte_svar++;
	}
if(dd_svar9 == "true") {
		feedbacktags[8].innerHTML = " <img src='../java_shared/korrekt.gif'/>";

	} else {
		feedbacktags[8].innerHTML = " <img src='../java_shared/forkert.gif'/>";
		forkerte_svar++;
	}
	if(dd_svar10 == "true") {
		feedbacktags[9].innerHTML = " <img src='../java_shared/korrekt.gif'/>";

	} else {
		feedbacktags[9].innerHTML = " <img src='../java_shared/forkert.gif'/>";
		forkerte_svar++;
	}
	if(dd_svar11 == "true") {
		feedbacktags[10].innerHTML = " <img src='../java_shared/korrekt.gif'/>";

	} else {
		feedbacktags[10].innerHTML = " <img src='../java_shared/forkert.gif'/>";
		forkerte_svar++;
	}

	if(forkerte_svar == 0) {
		feedback.innerHTML = "Du har alle svar korrekt!";
	} else {
		feedback.innerHTML = "Du har fejl i et eller flere spørgsmål.";
	}
}

-->
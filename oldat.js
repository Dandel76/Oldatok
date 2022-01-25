function szamol(){
	var a=parseInt(document.getElementById("oa").value);
	var sz=parseInt(document.getElementById("osz").value);
	var eredmeny = (a/(a+sz))*100;
	document.getElementById("megoldas").innerHTML=eredmeny;
}
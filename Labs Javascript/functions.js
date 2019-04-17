//DeclaringArray
var koers = new Array(1.36, 0.74, 48.40, 0.02);

//DeclaringVariable
var result = 0;

//MakeFunction
function exchange(bedrag, conversie) {

	//IfStatements
	if (conversie == "euroDollar") {
		//ShowResult
		result = bedrag * koers[0];
		document.getElementById("resultaat").innerHTML = bedrag + " euro voor " + result.toFixed(2) + " dollar";
	}
	else if (conversie == "dollarEuro") {
		result = bedrag * koers[1];
		document.getElementById("resultaat").innerHTML = bedrag + " dollar voor " + result.toFixed(2) + " euro";
	}
	else if (conversie == "euroRoebel") {
		result = bedrag * koers[2];
		document.getElementById("resultaat").innerHTML = bedrag + " euro voor " + result.toFixed(2) + " roebel";
	}
	else if (conversie == "roebelEuro") {
		result = bedrag * koers[3];
		document.getElementById("resultaat").innerHTML = bedrag + " roebel voor " + result.toFixed(2) + " euro";
	}
}
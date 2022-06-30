// Hallo ich bin [vorname] und ich komme aus [land].
// Meine Lieblingsspeisen sind [essen] und [essenZwei].
// Ich bin [alter] Jahre alt und [geburtsJahr] geboren.
const vorname = "Ammar";
const land = "Syrien";
const essen = "Pizza";
const essenZwei = "Apfel";
const alter= "27";
const geburtsJahr ="1995";

const zeileEins ="Hallo ich bin " + vorname +" und ich komme aus " +land+ ".";
const zeileZwei =`Meine lieblingsspeisen sind ${essen} und ${essenZwei}.`;
const zeileDrei =`Ich bin ${alter} Jahre alt und ${geburtsJahr} geboren.`;

console.log(zeileEins);
console.log(zeileZwei);
console.log(zeileDrei);


// A: “Ein Olympisches Schwimmbecken enthält (bei einer Wassertiefe von 3 m) 3 750 m3 Wasser.
// //  Wenn keine Wettkämpfe stattfinden wird aus Kostengründen 5 cm weniger eingelassen.
// //   Wie viele l Wasser sind das?”


const wasserGesamt = 3750;
const wasserTiefe = 300;
const wasserInZentimeter = wasserGesamt / wasserTiefe;
const wasserIn5Zentimeter = wasserInZentimeter * 5;

console.log("Aufgabe A", wasserIn5Zentimeter);



// B: “Mein Auto hat einen Verbrauch von 8 l/100 km. Wie weit komme ich mit einer Tankfüllung (66 l)?”

const minLieter = 8;
const maxLieter = 66;
const strecke = 100;
console.log("Aufgabe B", maxLieter * strecke / minLieter);



// C: “3 Arbeiter teeren die neue Unterführung und brauchen dafür 17h.
// //  Wie lange würde es dauern, wenn 5 Arbeiter eingesetzt wären?”

const minArbeiter = 3;
const maxArbeiter = 5;
const maxDauer = 17;
console.log(minArbeiter / minArbeiter * maxArbeiter);




// D: “882 / 14 x 12 / 2.3 x 999"
const zahl1 = 882;
const zahl2 = 14;
const zahl3 = 12;
const zahl4 = 2.3;
const zahl5 = 999;
console.log(zahl1 / zahl2 * zahl3 / zahl4 * zahl5);



// E: “12 x 7 x 17 / 7 / 17 + 333”
const zahlen1 = 12;
const zahlen2 = 7;
const zahlen3 = 17;
const zahlen4 = 7;
const zahlen5 = 17;
const zahlen6 = 333;
console.log(zahlen1 * zahlen2 * zahlen3 / zahlen4 / zahlen5 + zahlen6);


// F: “Familie Bayerl will einen neuen Gartenzaun an der 16,80 m langen Grundstücksgrenze ziehen.
//  Alle 120 cm muss ein Sockel betoniert werden. Pro Sockel muss die Familie 24,40 € bezahlen.
//   Wie viel Geld braucht die Familie für die benötigten Sockel?”
const grundstueckZentimeter = 1680;
const sockel = 120;
const bezahlen = 24.40;
console.log(grundstueckZentimeter / sockel * bezahlen)

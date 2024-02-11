function calculateCompatibility() {
var bidule1 = document.getElementById("userInput1").value.toLowerCase();
var bidule2 = document.getElementById("userInput2").value.toLowerCase();
    if (bidule1 === "" || bidule2 === "") {
        alert("Please enter both names.");
        return;
    }

    var compatibilityText = document.querySelector(".compatibility-text");
    var compatibilityPercentage = document.querySelector(".compatibility-percentage");
    var compatibilitySignal = document.querySelector(".compatibility-signal");
    var additionalText = document.querySelector(".additional-text");
    var resultDiv = document.querySelector(".result");
    
    resultDiv.style.display = "block";
    
    var compatibility;
    if (bidule2.toLowerCase() === "régime général des obligations") {
        compatibility = 13;
        additionalText.textContent = "Étre face à un cas pretique de rqo fait le méme effet que de se faire refuser dans tous les master auxquels on postule";
    } else if (bidule2.toLowerCase() === "droit des contrats") {
        compatibility = 6;
        additionalText.textContent = "Je t`aime comme j`aime tes sujets de partiels aussi doux qu`une chute du toit";
    } else if (bidule2.toLowerCase() === "droit de i`ue") {
        compatibility = 100; 
        additionalText.textContent = "Je t`aime plus que mon copain";
    } else if (bidule2.toLowerCase() === "droit pénal") {
        compatibility = 69; 
        additionalText.textContent = "Tu serais pas du droit pénal? J`ai bien envie de te passer les menottes";
    } else if (bidule2.toLowerCase() === "histoire du droit") {
        compatibility = 77; 
        additionalText.textContent = "Tu serais pas un commentaire d`histoire? Parce que je te finis à minuit";
    } else if (bidule2.toLowerCase() === "pec/éco pol") {
        compatibility = 58; 
        additionalText.textContent = "Tu serais pas un exam d`economie? Parce que tu m`as l`air d`étre une fille facile";
    } else if (bidule2.toLowerCase() === "institutions judiciaires / institutions admin") {
        compatibility = 91; 
        additionalText.textContent = "Tu serais pas IJIA? Je suis pas contre les plans à 3";
    } else if (bidule2.toLowerCase() === "anglais") {
        compatibility = 40; 
        additionalText.textContent = "Tu serais pas l`anglais? Parce que ta langue est dans toutes les bouches";
    } else if (bidule2.toLowerCase() === "institutions judiciaires") {
        compatibility = 91; 
        additionalText.textContent = "Tu serais pas IJIA? Je suis pas contre les plans à 3";
    } else if (bidule2.toLowerCase() === "institutions admin") {
        compatibility = 91; 
        additionalText.textContent = "Tu serais pas IJIA? Je suis pas contre les plans à 3";
    } else if (bidule2.toLowerCase() === "pec") {
        compatibility = 58; 
        additionalText.textContent = "Tu serais pas un exam d`economie? Parce que tu m`as l`air d`étre une fille facile";
    } else if (bidule2.toLowerCase() === "éco pol") {
        compatibility = 58; 
        additionalText.textContent = "Tu serais pas un exam d`economie? Parce que tu m`as l`air d`étre une fille facile";
    } else {
        compatibility = Math.floor(Math.random() * 101);
        if (compatibility === 40) {
            additionalText.textContent = "Es-tu une fille en eco-g? J`aimeras bien que tu me calcules";
        } else if (compatibility === 58) {
            additionalText.textContent = "Tu serais pas le bar à salade? Prcq t`as une longue queue";
        } else if (compatibility === 90) {
            additionalText.textContent = "Tu serais pas le 6eme étage? Prcq tu  es à couper le souffile";
        } else if (compatibility === 43) {
            additionalText.textContent = "Tu serais pas master de droit pénal? J`ai bien envie de te passer les menottes";
        } else if (compatibility === 65) {
            additionalText.textContent = "Tu serais pas ma vie sociale? J`ai vraiment envie de te revoir";
        } else {
            additionalText.textContent = "“Tu serais pas un sujet d’examen? Dès que je t’ai vu j’ai eu envie de te retourner”";
        }
    }
    
    compatibilityText.textContent = "Compatibles à ";
    compatibilityPercentage.textContent = compatibility + "%";
    compatibilitySignal.textContent = "!";
}

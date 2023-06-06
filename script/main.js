
const button = document.getElementById("submit");

//identifier les input individuellement 
const select = document.querySelectorAll("input");
const selects = document.querySelectorAll('input'); //on stocke l'ensemble des input dans une constante
console.log(select);
 
//stocker l'ensemble des input dans une constante //const selects = [document.querySelectorAll('input')];//(NodeList : se comporte en tableau) //console.log('checked => '+select.checked); ici, checked = false puisque par défaut aucun input n'est sélectionné)

// ajouter le gestionnaire d'événement sur le formulaire
document.querySelector('form').addEventListener('change', function (e) {
    e.preventDefault;
    for (var i = 0; i < selects.length; i++) { //déclarer la fonction avec var pour qu'elle soit accessible aux arguments de if
        if ( selects[i].checked === true ) break ;
    }
    button.disabled = false; //on active le bouton submit
    const evaluation = selects[i].value.substring(6); //on récupère la valeur de l'input +
     console.log(evaluation); 
     button.addEventListener('click', function(e) {
        const ratingReport = document.querySelector('span');
        ratingReport.textContent = selects[i].value.substring(6);
        document.getElementById('view').style.display = "none";
        document.getElementById('lastview').style.display = "flex";
    })
})






//exploiter la valeur
// rating-report du thanks.html
//utiliser la valeur de l'URL +concaténer  message
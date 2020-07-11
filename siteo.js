 function enregistrer()
 {
	 alert("Les information enregistrer");
 }
 
 function Accepter()
 {
	 alert("Les informations envoyé");
 }

 function Refuser()
 {
	alert("Les information Annuler Vous serez dirigé directement vers la page d'accueil !");
	 
 }
 function Verifier_formulaire(formulaire)
 {
  if (formulaire.Passe.value=="" || formulaire.identifiant.value=="" ){
    alert ("Attention à ne pas remplir les champs obligatoires");
	formulaire.submit();
  }
  else{
    alert ("Tous les champs obligatoires sont bons");
  }
}
 





 
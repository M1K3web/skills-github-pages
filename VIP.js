document.getElementById(myform).addEventListener('submit', function(event) {
  event.preventDefault(); // Impedisci l'invio predefinito del form
  window.alert("Il modulo è stato inviato");
  
  const generiSelect = document.getElementById('generi');
  const generiSelezionati = Array.from(generiSelect.selectedOptions).map(option => option.value);

  // Esegui la query SQL
  eseguiQuery(generiSelezionati);
});

function eseguiQuery(generiSelezionati) {
  fetch('script_php_che_esegue_query.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'generi=' + generiSelezionati
  })
  .then(response => response.json())
  .then(results => {
    // Inserisci i risultati nel codice HTML
    const risultatiDiv = document.getElementById('risultati');
    risultatiDiv.innerHTML = ''; // Cancella i risultati precedenti

    results.forEach(anime => {
      const animeDiv = document.createElement('div');
      animeDiv.innerHTML = `<h3>${anime.nome}</h3><img src="${anime.immagine}">`;
      risultatiDiv.appendChild(animeDiv);
    });
  });
};


const opzioni =document.querySelectorAll('.opzione');

opzioni.forEach(opzione=> {
	opzione.addEventListener('click', ()=> {
		//Rimuovi la classe 'selezionata' da tutte le opzioni
		opzioni.forEach(opzione=> opzione.classList.remove('slezionata'));
		//Aggiungi la classe 'selezionata' all'operazione cliccata
		opzione.classList.add('selezionata');
	});
});


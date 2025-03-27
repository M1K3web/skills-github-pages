<!doctype html>
<html lang="it">
<head>
<link rel="stylesheet" href="VIP css per php.css">
</head>
<body bgcolor="#00000";>

<h1>Ecco il risultato della ricerca:</h1>

<a href='VIP.html'><button>Torna alla pagina iniziale</button></a> 

<br><br>

<?php
$nomeserver = "localhost";
$username = "root";
$password = "";
$dbname = "gestionefiltrogenereanime";

// Create connection
$conn = new mysqli($nomeserver, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}
// Ottieni l'elenco di ID di generi selezionati dall'utente
$generiSelezionati = (array)$_POST['generi'];

// Costruisci la query SQL
if (is_array($generiSelezionati)) {
    $sql = "SELECT titolo, immagine FROM anime a JOIN anime_generi ag ON a.id = ag.anime_id JOIN generi g ON ag.genere_id = g.id WHERE g.id IN (".implode(",", $generiSelezionati) . ")";

    // Esegui la query
    $result = $conn->query($sql);

    // Verifica se ci sono risultati
    if ($result->num_rows > 0) {
        // Itera attraverso i risultati
        while($row = $result->fetch_assoc()) {
            // Estrai i dati dalla riga
            $titolo = $row['titolo'];
            $immagine = $row['immagine'];

            // Genera l'HTML per il titolo e l'immagine

            echo "<h2>" . $titolo . "</h2>";
            echo "<img src='" . $immagine . "' alt='" . $titolo . "'>";
        }
    } else {
        echo "Nessun risultato trovato.";
    }
}

$conn->close();
?>

</body>
</html>
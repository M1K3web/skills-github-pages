//Freccia per tornare su a scorrimento
document.getElementById('torna-su').addEventListener('click', function() {
 window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
	
//Scorrimento immagini
/*<script>
	const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    let counter = 0;

    function slide() {
      counter++;
      if (counter >= images.length) {
        counter = 0;
      }
      slides.style.transform = `translateX(-${counter * 600}px)`;
    }

    setInterval(slide, 3000); // Cambia immagine ogni 3 secondi
</script>
*/


> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e02-react-components` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*


&nbsp;

# `#03` React: Komponenty



W pliku `app.js` znajdziesz komponent `<Article/>`, który renderuje treści przekazane przez `props`.

Do każdego artykuły mogą być dodawane komentarze, które są przechowywane w `state`.

 1. Najpierw stwórz komponent kontrolowany – niech  `state` zarządza zawartością pola formularza.
 2. Następnie obsłuż zdarzenie `submit` dla `form`. Zdarzenie to ma powodować:
	 * dodanie nowego komentarza do `this.state.comments`
	 * usunięcie zawartości w  `<textarea/>`.

Do renderowania wielu `<li/>` na podstawie `this.state.comments` wykorzystaj `.map()`.


&nbsp;


> :arrow_left: [*poprzednie zadanie*](./../02) | [*następne zadanie*](./../04) :arrow_right:

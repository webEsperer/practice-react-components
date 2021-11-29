> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e02-react-components` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*


&nbsp;

# `#04` React: Komponenty


W pliku `app.js` znajdziesz kod komponentu, który był omawiany w materiałach. 

Odszukaj w nim `state` o nazwie `searchQuery` – do tej pory go nie wykorzystywaliśmy.

Dodaj do kodu JSX pole `<input/>` (nie musi być ono wewnątrz `<form/>`).

Jego zadaniem będzie filtrowanie listy użytkowników: jeśli wpiszesz do niego jakąś wartość (`onChange`), to uzyskasz (wyświetlisz) tylko tych użytkowników, którzy zawierają wpisany ciąg znaków.

Do filtrowania możesz użyć metody [.filter()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/filter).

Pamiętaj, aby nic nie usuwać ze `state`! Usunięcie treści z pola `<input/>` powinno spowodować wyświetlenie wszystkich dostępnych użytkowników.

### Podpowiedź

W `state` przechowuj tylko treść z pola `<input/>`, natomiast w `.renderUsersList()` zrób warunek (`if`), który będzie zwracał albo pełną listę użytkowników, albo przefiltrowaną.


&nbsp;


> :arrow_left: [*poprzednie zadanie*](./../03) | [*następne zadanie*](./../05) :arrow_right:

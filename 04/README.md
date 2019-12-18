# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React components inside #04

W pliku `app.js` znajdziesz kod komponentu, który był omawiany w materiałach. 

Odszukaj tam `state` o nazwie `searchQuery`, który do tej pory nie był wykorzystywany.

Twoim zadaniem będzie dodanie do kodu JSX pola `<input/>` (nie musi być on wew. `<form/>`).

Jego zadaniem będzie filtrowanie listy użytkowników. Czyli jeśli użytkownik wpisał jakąś wartość do tego pola (`onChange`) to należy wyświetlić tylko tych użytkowników, którzy zawierają ten ciąg znaków.

Do filtrowania możesz użyć metody [.filter()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/filter).

Pamiętaj, aby nic nie usuwać ze `state` ponieważ usunięcie treści z pola `<input/>` powinno spowodować wyświetlenie wszystkich dostępnych użytkowników.

### Podpowiedź

W `state` przechowuj tylko treść z pola `<input/>` natomiast w `.renderUsersList()` zrób warunek (`if`-a), który będzie zwracał pełną listę lub przefiltrowaną.
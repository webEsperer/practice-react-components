> :star: *Jeśli będziesz mieć problem z rozwiązaniem tego zadania, poproś o pomoc na odpowiednim kanale na Slacku, tj. `s2e02-react-components` (dotyczy [mentee](https://devmentor.pl/mentoring-javascript/)). Pamiętaj, aby treść Twojego wpisu spełniała [odpowiednie kryteria](https://devmentor.pl/jak-prosic-o-pomoc/).*


&nbsp;

# `#01` React: Komponenty


Twoim pierwszym wyzwaniem jest napisanie wszystkich metody cyklu życia komponentu, które do tej pory poznałeś.

Do każdej z nich dodaj odpowiedni `console.log()`, który będzie daną metodę jednoznacznie identyfikował, np.

```js
componentDidMount() {
    console.log('componentDidMount');
}
```

Dodatkowo w odpowiedniej metodzie uruchom `setInterval` z czasem 5 sekund i inkrementuj `state` o nazwie `counter`. Pamiętaj, aby „posprzątać” po tym interwale w adekwatnej metodzie.

Zwróć uwagę, jakie metody są po sobie wywoływane i w którym momencie. Przyjrzyj się też metodom wielokrotnie uruchamianym. 

## Webpack

W pliku `./webpack.config.js` (w katalogu głównym) mieści się gotowa konfiguracja webpacka dla Reacta. Znajduje się tam zmienna `taskNumber` przechowująca informację o zadaniu, które w danym momencie przerabiasz.

Za każdym razem będziesz musiał modyfikować zawartość tej zmiennej (np. `const  taskNumber  =  '01';`) i ponownie uruchamiać tryb developerski. Pamiętasz, jak to zrobić? Gdzie zapisany jest skrót do odpowiedniej komendy?

Pamiętaj również, żeby pobrać paczki z npm, które będziemy wykorzystywać podczas pracy z Reactem. Wiesz, jak je zainstalować?


&nbsp;

> :arrow_left: ~~*poprzednie zadanie*~~ | [*następne zadanie*](./../02) :arrow_right:

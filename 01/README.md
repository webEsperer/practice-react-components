# [![](../assets/img/logo-readme2.jpg)](https://devmentor.pl) &nbsp; React components inside #01

Twoim pierwszym wyzwaniem będzie napisać wszystkie metody cuklu życia komponentu jakie do tej pory poznałeś.

Następnie do każdej z nich dodaj odpowiednie `console`-ogi, które będą jednoznacznie identyfikować daną metodę np.

```
componentDidMount() {
    console.log('componentDidMount');
}
```

Dodatkowo w odpowiedniej metodzie uruchom `setInterval` z czasem 5. sekund, który będzie ikrementował `state` o nazwie `counter`. Pamiętaj, aby "posprzątać" po tym interwale w odpowiedniej metodzie.

Zwróć uwagę, jakie metody są po sobie wywoływane i w którym momencie. Przyjrzyj się też metodą, które są wielokrotnie uruchamiane. 

## Webpack

W pliku `./webpack.config.js` (w katalogu głównym) znajdziesz gotową konfigurację Webpack-a dla React. Znajduje się tam zmienna `taskNumber`, która przechwowuje informacje o zadaniu, które w danym momencie przerabiasz.

Za każdym razem będziesz musiał modyfikować zawartość tej zmiennej i ponownie uruchamiać tryb developerski. Pamiętasz jak to zrobić? Gdzie zapisany jest skrót do odpowiedniej komendy?

Pamiętaj również, że musimy mieć pobrane paczki z npm, które będziemy wykorzystywać podczas pracy z React. Wiesz jak je zainstalować?
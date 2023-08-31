# goit-js-hw-06

Zadanie 1
W HTML znajduje się lista kategorii ul#categories.

Napisz skrypt, który:

Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).

Zadanie 2
W HTML znajduje się pusta lista ul#ingredients.

<ul id="ingredients"></ul>

W JavaScript znajduje się tablica ciągów.

const ingredients = [
"Potatoes",
"Mushrooms",
"Garlic",
"Tomatos",
"Herbs",
"Condiments",
];

Napisz skrypt, który dla każdego elementu tablicy ingredients:

Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
Doda do elementu klasę item.
Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.
Zadanie 3
Napisz skrypt do tworzenia galerii obrazów według tablicy danych. W HTML znajduje się lista ul.gallery.

<ul class="gallery"></ul>

Użyj tablicy obiektów images w celu utworzenia elementów <img> umieszczonych w <li>. Aby utworzyć znacznik użyj template strings i metody insertAdjacentHTML().

Wszystkie elementy galerii powinny być dodawane do DOM podczas jednej operacji.
Ulepsz galerię używając flexboxów lub gridów poprzez klasy CSS.

Zadanie 4
Licznik składa się z elementu span i przycisków, które, po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość o jednostkę.

Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i nadaj jej początkową wartość wartość 0.
Dodaj click listeners do przycisków, i przy ich pomocy zwiększaj i zmniejszaj wartość licznika.
Aktualizuj interfejs (widok HTML) nową wartością zmiennej counterValue po każdej jej zmianie.
Zadanie 5
Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input) wstawia jego aktualną wartość do span#name-output. Jeśli pole input jest puste, w spanie powinien wyświetlić się tekst "Anonymous".

Zadanie 6
Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza czy wartość wprowadzona przez użytkownika spełnia warunek walidacji (ma odpowiednią długość)

Informacja o liczbie symboli, która powinna znajdować się w polu input, zawarta się w jego atrybucie data-length.
Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielony, a jeśli liczba jest nieprawidłowa - czerwony.
Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.

Zadanie 7
Napisz skrypt, który reaguje na zmianę wartości elementu input#font-size-control (zdarzenie input) i zmienia styl inline span#text aktualizując właściwość font-size. W rezultacie, podczas zmiany wartości suwakiem, ma zmieniać się rozmiar tekstu w elemencie span

Zadanie 8
Napisz skrypt zarządzania formularzem logowania.

Funkcjonalność przesyłania formularza form.login-form powinno zostać obsłużona przy użycie wydarzenia submit
Podczas przesyłania formularza strona nie powinna się odświeżać.
Jeśli w formularzu są nieuzupełnione pola, wyświetl alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, pobierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości pól input metodą reset.
Zadanie 9
Napisz skrypt, który zmienia kolor tła elementu <body> (poprzez style inline) po kliknięciu na button.change-color i wyświetla wartość koloru w span.color.

Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

Zadanie 10 (nieobowiązkowe)
Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza liczbę elementów do input i naciska przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje usunięta.

Utwórz funkcję createBoxes(amount), która przyjmuje jeden parametr - liczbę. Funkcja tworzy tyle elementów <div>, ile wybrano w amount i dodaje je do div#boxes.

Wymiary pierwszego <div> - 30px na 30px.
Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, tym samym usuwając wszystkie utworzone elementy.

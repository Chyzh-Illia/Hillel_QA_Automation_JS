export class Book {
    constructor(bookTitle, author, yearPublication) {
        this._bookTitle = bookTitle;
        this._author = author;
        this._yearPublication = yearPublication;
    }
    
    static findOlBook(...args) {
        // const min = Math.min(...args.map((item) => item._yearPublication)); ---- alternative
        // console.log(args.find(item => item._yearPublication = min))
        // return args.find(item => item._yearPublication = min);
        // return Math.min(...args.map((item) => item._yearPublication))
        let current = args[0]._yearPublication;
        for (let i = 1; i < args.length; i++) {
            if (args[i]._yearPublication < current) {
                current = args[i];

            } 
        };
        console.log(current);
        return current;
    }
    get bookTitle() {
        return this._bookTitle;
    }
    
    get author() {
        return this._author;
    }

    get yearPublication() {
        return this._yearPublication;
    }

    set bookTitle(value) {
        this._bookTitle = value;
    }

    set author(value) {
        this._author = value;
    }

    set yearPublication(value) {
        this._yearPublication = value;
    }


    printInfo() {
        return `Book Title: ${this._bookTitle}, Author: ${this._author}. Year of publication: ${this._yearPublication}`;
    }
}






// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.


// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook.
//  В сеттерах необхідно додати валідацію для переданих значень.
//  Використовуйте їх для зміни та отримання значень властивостей.


// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. 
// Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
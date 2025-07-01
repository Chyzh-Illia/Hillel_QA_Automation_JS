import { Book } from "./Book.js";

export class Ebook extends Book {
    constructor(bookTitle, author, yearPublication, formatFile) {
        super(bookTitle, author, yearPublication);
        this._formatFile = formatFile;
    }

    static ebookInstance(instance, format) {
        return new Ebook(instance, format);
    }

    get formatFile() {
        return this._formatFile;
    }

    set setFormatFile(value) {
        this._formatFile = value;
    }

    printInfo() {
        console.log(`Book Title: ${this._bookTitle}, Author: ${this._author}, Year of publication: ${this._yearPublication}, file format: ${this._formatFile}`);
    }
}



// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
// Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). 
// Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo


// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook
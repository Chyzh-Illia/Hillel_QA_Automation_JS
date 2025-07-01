import { Book } from "./Book.js";
import { Ebook } from "./EBook.js";

const bookInfo = new Book ("anyName", "John Snow", 1888);

const ebook = new Ebook ("Ford", "Henry Ford", 1880, "PDF")

bookInfo.printInfo();
ebook.printInfo();
console.log(bookInfo.bookTitle);
console.log(bookInfo.author);
console.log(bookInfo.yearPublication);

console.log(ebook.bookTitle);
console.log(ebook.author);
console.log(ebook.yearPublication);
console.log(ebook.formatFile);

ebook.setFormatFile = "SVG";
bookInfo.bookTitle = "Title";
bookInfo.author = "Homeless";
bookInfo.yearPublication = 2220;

console.log(bookInfo.bookTitle);
console.log(bookInfo.author);
console.log(bookInfo.yearPublication);

Book.findOlBook(bookInfo, ebook);
const ebok1 = Ebook.ebookInstance(new Book("Book", "Jack London", 1600), "Excel");
console.log(ebok1);


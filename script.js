const book1 = new book("The Hobbit", "JRR Tolkien", 254, "no");
const book2 = new book("The Stranger", "ALbert Camus", 375, "yes");

let myLibrary=[book1, book2];

function book(title, author, pages, read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;

    this.bookInfo=function (){
        return `${title} by ${author}, ${pages} pages, ${this.read()}`;
    }
}


function addBookToLibrary(){
    let title=document.querySelector("#booktitle").value;
    let author=document.querySelector("#bookauthor").value;
    let pages=document.querySelector("#numpages").value;
    let read=document.querySelector("#haveread").checked;
    let newBook= new book(title,author,pages,read);
    console.log(newBook); 
}

let form=document.querySelector("#form");
form.addEventListener("submit", function () {
    event.preventDefault();
    addBookToLibrary();
}
)



let myLibrary=[book1, book2];

function book(title, author, pages, read) {
    this.title=title;
    this.author=author;
    this.pages=pages;

    this.read=function () {
        if (read==="yes"||read==="Yes") {
            return 'read';
        }
        else {
            return 'has not been read yet';
        }
    };

    this.bookInfo=function (){
        return `${title} by ${author}, ${pages} pages, ${this.read()}`;
    }
}


function addBookToLibrary(){
    
}

const book1 = new book("The Hobbit", "JRR Tolkien", 254, "no");
const book2 = new book("The Stranger", "ALbert Camus", 375, "yes");

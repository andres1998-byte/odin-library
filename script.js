let myLibrary=[];

function book(title, author, pages, read) {
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;

    this.bookInfo=function (){
        return `${title} by ${author}, ${pages} pages, ${this.read()}`;
    }
}

function render() {
    let library=document.querySelector(".library");
    library.innerHTML="";
    for (let i=0; i<myLibrary.length;i++) {
        let book=myLibrary[i];
        let bookEl=document.createElement("div");
        bookEl.classList.add("book");
        bookEl.innerHTML=`
        <h3><em>${book.title}</em></h3>
        <h4>By: ${book.author}</h4>
        <h4># of pages: ${book.pages}</h4>
        <h4>Read: ${book.read}</h4>
        <button class="removebook" onclick="removeBook(${i})">Remove book</button>`;
        library.appendChild(bookEl);
    }
}


function addBookToLibrary(){
    let title=document.querySelector("#booktitle").value;
    let author=document.querySelector("#bookauthor").value;
    let pages=document.querySelector("#numpages").value;
    let read=document.querySelector("#haveread").checked;
    let newBook= new book(title,author,pages,read);
    myLibrary.push(newBook);
    render();
}

let form=document.querySelector("#form");
form.addEventListener("submit", function () {
    event.preventDefault();
    addBookToLibrary();
}
)

function removeBook (index) {
    myLibrary.splice(index,1);
    render();
}




const addBook = document.querySelector("#addBook")
const modelClose = document.querySelectorAll("#ModalClose")
const submitButton = document.querySelector("#Submit")
const deleteBook = document.querySelectorAll("#delete")

let myLibrary = [];



function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function () {
        return title + " by " + author + ", " + pages + " pages, " + haveRead
    }
}



function addBookToLibrary() {
    const bookTitle = document.getElementById("bookTitleInput").value
    const bookAuthor = document.getElementById("bookAuthorInput").value
    const bookPages = document.getElementById("bookPagesInput").value
    const COMP = document.getElementById("COMP")
    compornah = ""


    if (COMP.checked) {
        compornah = "Completed"
    }else{
        compornah = "Uncompleted"
    }

    let newBook = new Book(bookTitle, bookAuthor, bookPages, compornah)
    myLibrary.push(newBook);
    render()
}

function render() {
    let container = document.getElementById("holder");

    let book = myLibrary.pop()

    var column = document.createElement('div');
    column.setAttribute('class', 'column is-one-quarter is-desktop');
    container.appendChild(column);

    var notification = document.createElement('div');
    notification.setAttribute('class', 'notification');
    column.appendChild(notification);

    var deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'delete');
    deleteButton.setAttribute('id', 'delete');
    deleteButton.addEventListener("click", (e) => {
        removeBook(e)
    })
    notification.appendChild(deleteButton);

    var bookTitle = document.createElement('h1');
    bookTitle.setAttribute('class', 'bookTitle');
    bookTitle.innerHTML = book.title;
    notification.appendChild(bookTitle);

    var bookAuthor = document.createElement('h3');
    bookAuthor.setAttribute('class', 'bookAuthor');
    bookAuthor.innerHTML = book.author;
    notification.appendChild(bookAuthor);

    var bookPages = document.createElement('p');
    bookPages.setAttribute('class', 'bookPages');
    bookPages.innerHTML = book.pages;
    notification.appendChild(bookPages);

    var completeButton = document.createElement('button');
    completeButton.innerHTML = book.haveRead;


    if(completeButton.innerHTML == "Completed"){
        completeButton.innerHTML = "Completed"
        completeButton.setAttribute('class', 'completeButton');
    }else{
        completeButton.innerHTML = "Uncompleted"
        completeButton.setAttribute('class', 'Uncompleted');
    }

    completeButton.addEventListener("click", (e) => {
        compOrNah(e)
    })
    notification.appendChild(completeButton);


}


function removeBook(e){
    e.target.parentNode.parentNode.remove(e.target.parentNode.parentNode);
}

function compOrNah(e){
    if(e.target.innerHTML == "Completed"){
        e.target.innerHTML = "Uncompleted"
        e.target.setAttribute('class', 'Uncompleted');
    }else{
        e.target.innerHTML = "Completed"
        e.target.setAttribute('class', 'completeButton');
    }
}



addBook.addEventListener("click", (e) => {
    const modal = document.querySelector("#myModal")
    modal.style.display = "block";
})


modelClose.forEach(button => {
    button.addEventListener('click', (e) => {
        const modal = document.querySelector("#myModal")
        modal.style.display = "none";
    });
});

submitButton.addEventListener('click', (e) => {
    const modal = document.querySelector("#myModal")
    modal.style.display = "none";
    addBookToLibrary()
})

function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI(){}

UI.prototype.addBookToList = function(boo){
    // console.log(boo);
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');

    //console.log(row);
    row.innerHTML = `
        <td>${boo.title}</td>
        <td>${boo.author}</td>
        <td>${boo.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);



}

UI.prototype.clearField = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

document.getElementById('book-form').addEventListener('submit',function(e){

   //console.log("sdfsg");   
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

    //console.log(title,author,isbn);
    const book = new Book(title,author,isbn);

    //console.log(book);
    const ui = new UI();

    ui.addBookToList(book);

    ui.clearField();

     e.preventDefault();
})
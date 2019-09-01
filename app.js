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

UI.prototype.showalert = function(message,className){
    const div = document.createElement('div');

    div.className = `alert ${className}`;
    //console.log(div);

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form');

    container.insertBefore(div,form);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}

UI.prototype.clearField = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
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

    if(title === ''|| author === ''|| isbn === ''){
        // alert('Failed');
        ui.showalert('please fill in all fields','error');
    }else{
        ui.addBookToList(book);

        ui.showalert('book added','success');

        ui.clearField();
    }
     e.preventDefault();
});

document.getElementById('book-list').addEventListener('click',function(e){
    //console.log('sgs');
    const ui = new UI();

     ui.deleteBook(e.target);

     ui.showalert('Book removed','success');
     
    e.preventDefault();

});
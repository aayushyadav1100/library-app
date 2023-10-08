console.log('This is index.js');

//TO-Dos
// 1. Store all data to localStorage
// 2. Add another column to add an option to delete
// 3. Add scroll bar to the table.


// Constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display constructor
function Display(){


}

// Add methods to display prototypes
Display.prototype.add = function(book){
    console.log('Adding to UI');
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name} </td>
                        <td>${book.author} </td>
                        <td>${book.type} </td>
                    </tr>`;

    tableBody.innerHTML += uiString;
}

// Implement clear function
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// Implement validate function
Display.prototype.validate = function(book){
    if(book.name.length<2 || book.author.length<2 ){
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show = function (type, displayMessage){
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message: </strong>  ${displayMessage}.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
    setTimeout(function() {
        message.innerHTML = '';
    }, 1500);
}


// Add submit event listener to libraryform
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    console.log('You have submitted the form');
    let name = document.getElementById('bookName').value; 
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let thriller = document.getElementById('thriller');

    if(fiction.checked){
        type = fiction.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(thriller.checked){
        type = thriller.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been added successfully');
    }else{
        // show error
        display.show('danger', 'Sorry your book cannot be added');
    }


    e.preventDefault(); 

}

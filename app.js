//data
const list_items = [
    {
       "bookid": "1",
       "title": "In Search of Lost Time",
       "authorName": "Marcel Proust"
     },
     {
        "bookid": "2",
        "title":"Ulysses",
        "authorName": "James Joyce"
       },
  
       {
        "bookid": "3",
        "title": "Don Quixote",
        "authorName": "Miguel de Cervantes"
       },
       {
        "bookid": "4",
        "title": "The Great Gatsby",
        "authorName": "F. Scott Fitzgerald"
       },
       {
        "bookid": "5",
        "title": "One Hundred Years of Solitude",
        "authorName": "Gabriel Garcia Marquez"
       },
       {
        "bookid": "6",
        "title": "Moby Dick",
        "authorName": "Herman Melville"
       },
       {
        "bookid": "7",
        "title": "War and Peace",
        "authorName": "Leo Tolstoy"
       },
       {
        "bookid": "8",
        "title": "Lolita",
        "authorName": "Vladimir Nabokov"
       },
       {
        "bookid": "9",
        "title": "Hamlet",
        "authorName": "William Shakespeare"
       },
       {
        "bookid": "10",
        "title": "The Catcher in the Rye",
        "authorName": "J. D. Salinger"
       },
       {
        "bookid": "11",
        "title": "The Odyssey",
        "authorName": "Homer"
       },
       {
        "bookid": "12",
        "title": "The Brothers Karamazov",
        "authorName": "Fyodor Dostoyevsky"
       },
       {
        "bookid": "13",
        "title": "Crime and Punishment",
        "authorName": "Fyodor Dostoyevsky"
       },
       {
        "bookid": "14",
        "title": "Madame Bovary",
        "authorName": "Gustave Flaubert"
       },
       {
        "bookid": "15",
        "title": "The Divine Comedy",
        "authorName": "Dante Alighieri"
       },
       {
        "bookid": "16",
        "title": "The Adventures of Huckleberry Finn",
        "authorName": "Mark Twain"
       },
       {
        "bookid": "17",
        "title": "Alice's Adventures in Wonderland",
        "authorName": "Lewis Carroll"
       },
       {
        "bookid": "18",
        "title": "Pride and Prejudice",
        "authorName": "Jane Austen"
       },
       {
        "bookid": "19",
        "title": "Wuthering Heights",
        "authorName": "Emily Brontë"
       },
       {
        "bookid": "20",
        "title": "To the Lighthouse",
        "authorName": "Virginia Woolf"
       }
];
//variable linked in index.html to list data items
const list_element = document.getElementById('myBooks');
//variable linked in index.html for pagination numbers
const pagination_element = document.getElementById('pagination');

let current_page = 1;
let rows = 5;


//function to display data  
function DisplayList(items, wrapper, rows_per_page, page) {
    //verify there is nothing inside of the myBooks Element
    wrapper.innerHTML = "";
    //minus one from page to match correct data number
    page--;
    //start and end of looping through page rows
    let start = rows_per_page * page;
	let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);
    //loop through paginated items depending on page number
    for (let i = 0; i < paginatedItems.length; i++) {
        //get data and append the full row
        let item = paginatedItems[i];
        let row = document.createElement('div');
        //add classes for spacing and styling
        row.classList.add("row");
        console.log("pag item" + paginatedItems.length);
        row.classList.add('item');
        row.innerHTML = `
          <div class='col-sm bookid'>${item.bookid}</div>
          <div class='col-sm title'>${item.title}</div>
          <div class='col-sm author'>${item.authorName}</div>
        `;
        wrapper.appendChild(row);
    }
}


function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";
    //round up number for page number
    let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}


function PaginationButton (page, items) {
    //create button to be equal to page number
	let button = document.createElement('button');
	button.innerText = page;
    //if button is on current page, add the class of active
	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

//call display and setup pagination button
DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);
//Declaration of 2 global variables
// students contains list of all student list items using the class 'student-item to select them'
const students = document.querySelectorAll(".student-item");
// itemsPerPage stays at a consistent 10 to be used in functions later on
const itemsPerPage = 10;
console.log(students);

function showPage(list, page) {
  //Dynamically initializes startIndex and endIndex variables based which page number is inputted
  let startIndex = (page * itemsPerPage) - itemsPerPage;
  let endIndex = itemsPerPage * page;
  //Loops through student list and sets display property based on where they are on the list
  for(let studentIndex = 0; studentIndex < list.length; studentIndex++) {
      if(studentIndex >= startIndex && studentIndex < endIndex) {
        list[studentIndex].style.display = "";
      } else {
        list[studentIndex].style.display = "none";
      }
  }
}


/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
function appendPageLinks(list) {
  //Initializes and attaches div and ul elements with the div element being assigned class, 'pagination'
  let div = document.createElement('div');
  div.setAttribute('class', 'pagination');
  document.querySelector(".page").appendChild(div);
  let ul = document.createElement('ul');
  div.appendChild(ul);
  // Initializing page Node to used within for loop
  let pageNode = "";
  // For Loop to dynamically create page links based on number of Students
  //pageNum initialized to 1 to avoid a page '0'
  for(let pageNum = 1; pageNum <= students.length; pageNum += itemsPerPage) {
    // Conditional used to set active class on first page
    if(pageNum === 1){
      //Math.ceil used to round up values to the next integer to allow 44, 64, etc users to be shown
      pageNode += `<li><a href="#" class="active">${Math.ceil(pageNum/itemsPerPage)}</a></li>`;
    } else {
      pageNode += `<li><a href="#">${Math.ceil(pageNum/itemsPerPage)}</a></li>`;
    }
  }
  // ul to be updated with inner contents once for loop is done creating the page links
  ul.innerHTML = pageNode;

  let links = document.querySelectorAll('a');

  //Looping through each link to add an onclick event to each one
  for(link of links){
    link.onclick = function (e) {
      //Nested Loop to check to add 'active' class to clicked link and remove classes from the rest
      for(link of links) {
        if(e.target == link) {
          link.className = 'active';
        } else {
        link.className = '';
        }
      }
      // Calls show page when link is clicked feeding in the number of said link's textContent
      showPage(students, e.target.textContent);
    }
  }
}

showPage(students, 1);
appendPageLinks(students);




// Remember to delete the comments that came with this file, and replace them with your own code comments.

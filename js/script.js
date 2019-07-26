//Declaration of 2 global variables
// students contains list of all student list items using the class 'student-item to select them'
const students = document.querySelectorAll(".student-item");
// itemsPerPage stays at a consistent 10 to be used in functions later on
const itemsPerPage = 10;

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

function appendPageLinks(list) {
  // Added Conditional so that no extra pagination bars are created if one already existed
  if(document.querySelector('.pagination') != null){
    let paginationDiv = document.querySelector('.pagination');
    paginationDiv.parentNode.removeChild(paginationDiv);
  }
    //Initializes and attaches div and ul elements with the div element being assigned class, 'pagination'
  let div = document.createElement('div');
  div.setAttribute('class', 'pagination');
  document.querySelector(".page").appendChild(div);
  let ul = document.createElement('ul');
  div.appendChild(ul);
  // Initializing page Node to used within for loop
  let pageNode = "";
  // For Loop to dynamically create page links based on list para
  //pageNum initialized to 1 to avoid a page '0'
  for(let pageNum = 1; pageNum <= list.length; pageNum += itemsPerPage) {
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
      //After feedback, changed searchResults to list parameter
      showPage(list, e.target.textContent);
    }
  }
}

function searchField() {
  // Creates div to store search bar
  let div = document.createElement('div');
  div.setAttribute('class', 'student-search');
  document.querySelector('.page-header').appendChild(div);
  // Creates search bar and sets placeholder property
  div.innerHTML = '<input placeholder="Search for students..."><button>Search</button>';
  const input = document.querySelector('input');
  // oninput value is updated with a function so the results update with each input change
  input.onkeyup = function (e) {
      // Initializes studentNames to be looped over to compare names
      let studentNames = document.querySelectorAll('h3');
      // Initializing searchResults to be used as an array to update pagination links after for loop
      let searchResults = [];

      for(studentName of studentNames){
        //Sets all the students to none before checking for matches
        studentName.parentNode.parentElement.style.display = 'none';
        // Lower cases both the student's name and the inputted value and compares
        if(studentName.textContent.toLowerCase().includes((e.target.value).toLowerCase())) {
          // Pushes the value into the array to be used for pagination afer loop closes
          //After Feedback, changed from studentName.textContent to the grandparent node to work with showPage
          searchResults.push(studentName.parentNode.parentNode);
        }
      }
      // After for loop, checks to see if the search results array is empty
      if(searchResults.length === 0) {
        // Checking to see if the noResults message already exists before creating a new one
        if(document.querySelector('.no-result') === null) {
          let noResults = document.createElement('div');
          noResults.setAttribute('class', 'no-results');
          noResults.textContent = "Sorry, no results found";
          document.querySelector(".student-list").appendChild(noResults);
        }
      } else {
        // Checking to see if noResults exists before removing it
        if(document.querySelector('.no-results') != null) {
          let noResults = document.querySelector('.no-results');
          document.querySelector(".student-list").removeChild(noResults);
        }
        // Updates each list to update the links to reflect how many results are returned
        appendPageLinks(searchResults);
      }
      showPage(searchResults, 1);
    }
}

//initializes page with the first 10 students
showPage(students, 1);
searchField();
//initializes the links with their behavior and existence
appendPageLinks(students);

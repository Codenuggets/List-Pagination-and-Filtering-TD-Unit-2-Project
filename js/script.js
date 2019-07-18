const students = document.querySelectorAll(".student-item");
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





// Remember to delete the comments that came with this file, and replace them with your own code comments.

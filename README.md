# List Pagination and Filtering TD Unit 2 Project
 Teamtreehouse Techdegree project for Unit 2: List Pagination and Filtering

## Overview
This project uses Javascript to take a list of students written in HTML and filter them into groups of 10 for easier reading. These groups are seperated into different pages.

## showPage(list, page)
A function, that takes 2 parameters, displays a set number of students, based on the value of the `itemsPerPage` variable. The students shown is filtered by their position in the index that is calculated internally using local variables
### Parameters
* `list` - A list of items to be filtered within the function, in this case `students` that was declared globaly at the start of the Project
* `page` - page number that the page is on

### Local variables
* `startIndex` - The initial item's index calculated by which page is currently being displayed
* `endIndex` - The last item's index calculated by which page is currently being displayed

## appendPageLinks(list)
A function that takes a `list` parameter and dynamically creates page links based on the list that's fed into it

### Parameters
* `list` - A list that helps calculate the number of links to get generated

### Local variables
* `div` - Helps create a `<div>` element to be appended to `index.html`
* `ul` - Helps create a `<ul>` element to be appended to `index.html`. Also has `innerHTML` updated with `pageNode`
* `pageNode` - Used to stored a string to be dynamically updated in a loop and then set the the `innerHTML` value of `ul`
* `links` - Used to reference the links generated and then get looped to add an `onclick` function to each link

## searchField()
A function, that takes no parameters, creates and appends a search bar to `index.html`. Functionality is also added to the search bar in this function. With each keypress from the user, results are returned to the user with the page links updating to reflect how many results are returned. There is also a message displayed if no results are returned

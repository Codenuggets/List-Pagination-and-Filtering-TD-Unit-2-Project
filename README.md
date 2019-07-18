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

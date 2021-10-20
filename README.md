### Tokero---Fullstack-developer-

The application has a REST architecture (Representational State Transfer):

- Back-end
  * ASP.NET Core Web Api
  * Entity Framework Core
  * SQL Server
 
 - Front-end
  * ReactJS running on Node through npm (node package manager)
  * React MUI
  * Bootstrap
  * Redux
  * Axios for handling HTTP requests
  
- Languages
  * Backend: C#, SQL, LINQ
  * Frontend: TS, JS, HTML, CSS
  
- Tools
  * Visual Studio for Api
  * Visual Studio Code as the code editor for the client side
  * SQL Server Management Studio for database
  * Postman to check Api http methods
  
- Challanges
  * New environment of React
  * Hooks management
  * Redux connection to state and action props in the component
  
- Improvements
  * Rethink design of tables with each type of operation, though they have defferent columns for each operation there can be a component with childs for headers, respective rows, resulting in code legibility and a better understanding
  * Fix the issue that sometimes pagination buttons are not rendered (maybie a delay on render child)
  * Fix **slice()** function that doesn't occurs in the script on hooks (mount component / update events), but displays well in console. Sometimes, after some delays and calls through set state the method works and the sliced array is rendered, but in most cases it returns undefined, therefore the algorithm needs to be updated
  

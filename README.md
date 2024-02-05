# SAPUI5 Product Management Application

This SAPUI5 project is designed to manage products by fetching data from OData services and displaying a :bento:list of products:bowl_with_spoon:. Additionally, users can view detailed information about each product, including supplier details, order details, and category information.

## Features

- Display a list of products fetched from OData services.
- View detailed product information including supplier details and order details.

## Project Structure 

The project follows a typical SAPUI5 application structure, including the following main components:

### Webapp directory: Contains all the application-specific files.

- _**css:**_ Contains CSS stylesheets for styling the application.
- _**i18n:**_ Contains internationalization (i18n) files for language localization.
- _**views:**_ Contains XML views defining the UI components and layout.
- _**controllers:**_ Contains JavaScript files defining controllers for handling logic and interactions in the views.
- _**formatter.js:**_ Contains logic to manipulate and format discontinued/available data - not working. 
- _**component.js:**_ Initializes the SAPUI5 application and sets up the main components.
- _**index.html:**_ Main HTML file serving as the entry point to the application.
 - _**manifest.json:**_ Contains central configurations that defines several aspects of the application, including: **Metadata**, **Routing and Navigation**, **Root View**, **Models and Data Sources**, **Dependencies and Libraries** and **Resources Handling**. 
- _**package.json:**_ Contains dependencies managed by npm.
- _**ui5.yaml:**_ Contains settings and properties for the UI5 tooling framework. 
- _**README.md:**_ Documentation file providing project overview, setup instructions, and other relevant information.
- _**proxy.js:**_ I created this file to set up a server using the CORS Anywhere - to avoid the error that I was having while requesting data from OData Services. The file defines the host and the port to list on, allowing them to be configured using environment variables if provided. The file is not working. 

  
### Mockserver directory: Contains the mock server implementation for local development and testing.

- _**metadata.xml:**_ Metadata file defining the mock server responses and data structure.
- _**mockdata:**_ Contains mock data files for simulating OData responses during development.
- _**mockserver.js:**_ File defining the mock server logic and routes.
- _**initMockServer.js**_ **&&** _**mockServer.html:**_ Files to test the mockServer with a different HTML entry point page.   
  
## Setup Instructions 

To run the project locally, follow these steps:

**1. Clone the Repository:**
```
git clone https://github.com/url_repository.git
```

**2. Navigate to the Project Directory:**
```
cd your_repository
```

**3. Install Dependencies:**
Ensure you have Node.js and npm installed. Then, install project dependencies using npm:
```
npm install
```

**4. Run the Application:**
Once dependencies are installed, start the development server:
 ```
ui5 serve
```

**5. Access the Application:**
Open your web browser and navigate to the respective localhost url to view the application.

## OData Services

The project utilizes OData services to fetch product details, supplier information, order details, and category information.
<p align= left>
<img src="https://logodix.com/logo/1605616.jpg" alt="odata" width="40" height="40" />
</p>

## Development Environment

The project is developed using SAPUI5 framework along with JavaScript, HTML, and CSS. It utilizes modern web development practices and tooling for efficient development and maintenance.
<p align= left>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGhN6ADJ4Mxl2i5iFixjTXBxe3Cfe868ddrTss-JEexzS_fSLbn6TBl--2lk3zv7uNr4&usqp=CAU" alt="sapui5" width="40" height="40" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="40" height="40" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />

</p>

## Issues Overview 

- **Product Search**: I added a search functionality to filter products but it's not working as expected.
- **Discontinue Button**: The button to mark products as discontinued only works on the first click.
- **Color Display**: Products should be displayed with a green line if available and red if discontinued, but this feature is not working correctly.

## Next Steps 

- Investigate the search functionality to identify and resolve the issue;
- Debug the button click event handling to ensure consistent behavior;
- Fix the color display logic to accurately reflect the status of products;
- Address some styling issues related to the application components, striving to make them as similar to the provided example as possible.
- Include a Portuguese i18n file to enable automatic translation into Portuguese.
- Correct proxy.js server file and set up CORS Anywhere properly.
  

# SAPUI5 Product Management Application

This SAPUI5 project is designed to manage products by fetching data from OData services and displaying a :bento:list of products:bowl_with_spoon:. Additionally, users can view detailed information about each product, including supplier details, order details, and category information.

## Features

- Display a list of products fetched from OData services.
- View detailed product information including supplier details, order details, and category information.
- Navigate between product list and product details seamlessly.

## Project Structure 

The project follows a typical SAPUI5 application structure, including the following main components:

### Webapp directory: Contains all the application-specific files.

- **css:** Contains CSS stylesheets for styling the application.
- **i18n:** Contains internationalization (i18n) files for language localization.
- **models:** Contains models for data binding and communication with OData services.
- **views:** Contains XML views defining the UI components and layout.
- **controllers:** Contains JavaScript files defining controllers for handling logic and interactions in the views.
- **Component.js:** Initializes the SAPUI5 application and sets up the main components.
- **manifest.json:** Configuration file defining application metadata, navigation routes, and dependencies.
- **index.html:** Main HTML file serving as the entry point to the application.
  
### Mockserver directory: Contains the mock server implementation for local development and testing.

- **metadata.xml:** Metadata file defining the mock server responses and data structure.
- **mockdata:** Contains mock data files for simulating OData responses during development.
- **mockserver.js:** Script file defining the mock server logic and routes.
  
### Main directory

- **package.json:** Contains project metadata and dependencies managed by npm.
- **README.md:** Documentation file providing project overview, setup instructions, and other relevant information.

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
npm start
```

**5. Access the Application:**
Open your web browser and navigate to http://localhost:3000 to view the application.

## OData Services

The project utilizes OData services to fetch product details, supplier information, order details, and category information. Ensure that the OData service endpoints are correctly configured and accessible.

## Development Environment

The project is developed using SAPUI5 framework along with JavaScript, HTML, and CSS. It utilizes modern web development practices and tooling for efficient development and maintenance.
<p align= left>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGhN6ADJ4Mxl2i5iFixjTXBxe3Cfe868ddrTss-JEexzS_fSLbn6TBl--2lk3zv7uNr4&usqp=CAU" alt="sapui5" width="40" height="40" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html5" width="40" height="40" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
<img src="https://logodix.com/logo/1605616.jpg" alt="odata" width="40" height="40" />

</p>

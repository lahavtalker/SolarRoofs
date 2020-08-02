# Solar Roofs Service - Final Project

![GitHub Logo](https://github.com/lahavtalker/SolarRoofs/blob/master/src/components/Navbar/Logo.png?raw=true)</br>
Solar Roofs is a software whose purpose is to provide a database of building roofs who can potentially be used to install photovoltaic systems for solar power generation on them based on the use of data layers and maps from GIS system and the use of the OpenCV library for image analysis.

The system will classify the buildings by priorities according to various parameters, such as available roof space, public or private buildings, location of the building in relation to the sun, the type of roof and more.
This system can be used by municipalities, electricity provider companies and large companies offering the installation of this technology.

## How to use:

- The user enters the main screen.
- The user chooses the service he/she wants.
- The user will be moved to the appropriate screen.

#### Private sevice

1. The user enters the **Private service** screen.
2. The user inputs the **address** in the search bar.
3. The system will check if the address exists, if it does then it the building will be displayed on the map, otherwise, an error will be displayed.
4. The user will click on the analyze image button, if the image exists then a request will be sent to the server and it will perform the image analysis and return an answer, if no image exists then an error will be displayed.

####

5. The user enters the **Organizational service** screen.
6. The user enters the **city** in the search bar.
7. The system will check if the city exists, if it does then a list of the buildings in the city will be displayed, from which you will select the desired building and display it on the map.
8. The user will click on the image analysis button, if the image exists then a request will be sent to the server and it will perform the image analysis and return a reply, if there is no image then an error will be displayed.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

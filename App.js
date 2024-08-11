/*


Create React App


npx create-react-app abc-automobiles
cd abc-automobiles
npm start








functional Components


- javascript functions that return jsx
- simple and easier to write compared to class
- dont need to manage state or lifecycle methods






Class Component


- extend from React Component
- they can hold and manage state and provide lifecycle methods
- they are powerful than functional component but also more complex






MENU  - Home , About Us , vehicles , Services , Contact Us
ABOUT
FOOTER
*/




/*
Routing


1. Install React Router
npm install react-router-dom


2. Set Up Browser Router
update src/index.js to include BrowserRouter
update src/App.js to include routes


update Menu Component to provide Navigation Links


*/




/*


json-server




C --- CREATE --- POST
R ---- READ ----- GET
U ---- UPDATE ---- PUT
D  ----- DELETE --- DELETE






1. Install Json Server
npm install -g json-server


2. Create a file db.json inside abc-automobile folder


3. Start json server
json-server --watch db.json --port 5000


*/




import Menu from "./Components/Menu";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Vehicles from "./Components/Vehicles";
import AddVehicle from "./Components/AddVehcles";
import UpdateVehicle from "./Components/Updatevehicles";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import {Routes , Route } from 'react-router-dom';




function App(){
  return (
    <>
    <Menu/>




    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vehicles" element={<Vehicles/>}/>
      <Route path="/add-vehicle" element={<AddVehicle/>}/>
      <Route path="/update-vehicle/:id" element={<UpdateVehicle/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
    </Routes>


   
   
    <Footer/>
    </>
  )
}


export default App;



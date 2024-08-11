import { useState,useEffect } from "react";


import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Vehicles(){


    const [vehicles , setVehicles]=useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
        fetchVehicles();
    }, [])




    const fetchVehicles = () => {
        axios.get('http://localhost:5000/vehicles')
            .then(response => {
                setVehicles(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the vehicle data',error)
            })
    }


    const handleDelete = (id)=> {
        axios.delete(`http://localhost:5000/vehicles/${id}`)
        .then(response => {
            fetchVehicles();
        })
        .catch(error => {
            console.error('There was an error deleting the vehicle data',error)
        })
    }


    return (
        <div className="container mt-4">
            <h2>Vehicle List</h2>
            <div className="row">
                {vehicles.map(vehicle => (
                    <div className="col-md-4" key={vehicle.id}>
                    <div className="card mb-4">
                        <img src={vehicle.image} height={300}  className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{vehicle.name}</h5>
                            <p className="card-text">Price: ${vehicle.price}</p>
                            <p className="card-text">Mileage: {vehicle.mileage}</p>
                            <p className="card-text">Seats: {vehicle.seats}</p>
                            <p className="card-text">Color: {vehicle.color}</p>
                            <p className="card-text">Fuel: {vehicle.fuel}</p>
                            <p className="card-text">Gear: {vehicle.gear}</p>
                            <p className="card-text">Description: {vehicle.description}</p>
                            <button  className="btn btn-danger me-2" onClick={()=> handleDelete(vehicle.id)}>DELETE</button>
                            <button className="btn btn-warning" onClick={() => navigate(`/update-vehicle/${vehicle.id}`)}>UPDATE</button>
                        </div>
                        </div>
                    </div>


                ))}
            </div>


        </div>
    )
}


export default Vehicles;







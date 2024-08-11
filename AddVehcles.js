
import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';




function AddVehicle(){




    const navigate = useNavigate();




    const formik = useFormik({
        initialValues: {
            image:'',
            name:'',
            price:'',
            mileage:'',
            color:'',
            seats:'',
            fuel:'',
            gear:'',
            description:''
        },
        validationSchema: Yup.object({
            image: Yup.string().required('Image URL is required'),
            name: Yup.string()
                    .min(5,'Name must be at least 5 characters')
                    .required('Name is required'),
            price: Yup.number()
                    .min(1,'Price must be greater than 0')
                    .required('Price is required'),
            mileage: Yup.number()
                    .min(1,'Mileage must be greater than 0')
                    .required('Mileage is required'),
            seats: Yup.number()
                    .min(1,'seats must be greater than 0')
                    .max(6,'seats must be less than 7')
                    .required('Name is required'),
           
        }),
        onSubmit: (values , {setSubmitting, resetForm , setStatus})=>{
            axios.post('http://localhost:5000/vehicles',values)
                .then(response=> {
                    setStatus('success');
                    resetForm();
                    navigate('/vehicles');
                })
                .catch(error=>{
                    setStatus('error');
                })
                .finally(()=>{
                    setSubmitting(false);
                });
        },
    });




    return (
        <div className="container mt-4">
            <h2>Add New Vehicle</h2>


            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}
                        />


                        {
                            formik.touched.image &&  formik.errors.image ? (
                                <div className="text-danger">{formik.errors.image}</div>
                            ): null
                        }
                </div>






                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        />


                        {
                            formik.touched.name &&  formik.errors.name ? (
                                <div className="text-danger">{formik.errors.name}</div>
                            ): null
                        }
                </div>






                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        />


                        {
                            formik.touched.price &&  formik.errors.price ? (
                                <div className="text-danger">{formik.errors.price}</div>
                            ): null
                        }
                </div>




                <div className="mb-3">
                    <label htmlFor="mileage" className="form-label">Mileage</label>
                    <input
                        id="mileage"
                        name="mileage"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.mileage}
                        />


                        {
                            formik.touched.mileage &&  formik.errors.mileage ? (
                                <div className="text-danger">{formik.errors.mileage}</div>
                            ): null
                        }
                </div>






                <div className="mb-3">
                    <label htmlFor="gear" className="form-label">Gear</label>
                    <input
                        id="gear"
                        name="gear"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.gear}
                        />


                        {
                            formik.touched.gear &&  formik.errors.gear ? (
                                <div className="text-danger">{formik.errors.gear}</div>
                            ): null
                        }
                </div>






                <div className="mb-3">
                    <label htmlFor="color" className="form-label">color</label>
                    <input
                        id="color"
                        name="color"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.color}
                        />


                        {
                            formik.touched.color &&  formik.errors.color ? (
                                <div className="text-danger">{formik.errors.color}</div>
                            ): null
                        }
                </div>




                <div className="mb-3">
                    <label htmlFor="seats" className="form-label">Seats</label>
                    <input
                        id="seats"
                        name="seats"
                        type="number"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.seats}
                        />


                        {
                            formik.touched.seats &&  formik.errors.seats ? (
                                <div className="text-danger">{formik.errors.seats}</div>
                            ): null
                        }
                </div>




                <div className="mb-3">
                    <label htmlFor="fuel" className="form-label">Fuel</label>
                    <input
                        id="fuel"
                        name="fuel"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.fuel}
                        />


                        {
                            formik.touched.fuel &&  formik.errors.fuel ? (
                                <div className="text-danger">{formik.errors.fuel}</div>
                            ): null
                        }
                </div>




                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        className="form-control"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        />


                        {
                            formik.touched.description &&  formik.errors.descrption ? (
                                <div className="text-danger">{formik.errors.description}</div>
                            ): null
                        }
                </div>




                <button type="submit" className="btn btn-primary">
                    submit
                </button>
            </form>


        </div>
    )


}


export default AddVehicle;

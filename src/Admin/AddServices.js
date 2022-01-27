import React from "react";
// import "./Add";
import { useForm } from "react-hook-form";
// import useFirebase from "../hooks/useFirebase";
import Swal from 'sweetalert2';
const AddServices = () => {
    // const { user } = useFirebase();
    const {
        register,
        handleSubmit,
        reset,
        // formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://wetraveller.herokuapp.com/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((result) => {
                if (data.insertedId) {
                    Swal.fire("Product has been added!", "", "Success");
                    reset()
                }
                reset()
            });
    };
    return (
        <div>
            <div>
                <h1 className="mt-5 text-center text-primary">Please Add Services</h1>
                <div className="login-box w-25 m-auto mt-5">
                    <div className="event-box border border d-flex justify-content-center align-items-center">
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("title")}
                                    placeholder="Title"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("traveller")}
                                    placeholder="Traveller"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                <input
                                    {...register("description")}
                                    placeholder="Description"
                                    // className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("shortDescription")}
                                    placeholder="Short Description"
                                    // className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />

                                <input
                                    {...register("image", { required: true })}
                                    placeholder="Image Link"
                                    // className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("price", { required: true })}
                                    placeholder="Price"
                                    // className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("category", { required: true })}
                                    placeholder="Category"
                                    // className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("location", { required: true })}
                                    placeholder="Location"
                                    // className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                {/* <select {...register("model")} className="p-2 m-2 w-100">
                                    <option value="premium">premium</option>
                                    <option value="classic">classic</option>
                                    <option value="business">business</option>
                                </select>
                                <br />

                                {errors.exampleRequired && <span>This field is required</span>} */}

                                <input
                                    type="submit"
                                    value="Add"
                                    className="btn btn-danger w-50"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServices;

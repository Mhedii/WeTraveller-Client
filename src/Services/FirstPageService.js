import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FirstPageService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://wetraveller.herokuapp.com/Services")
            .then((res) => res.json())
            .then((data) => setServices(data));

    }, []);
    console.log(services);
    return (
        <div>
            <h1>Experiences</h1>

            <div className="services container">
                <div className="row container">
                    {services.slice(0, 6)?.map((pd, index) => (
                        <div className="col-md-6 col-lg-4 ">
                            <div className="service p-3 border border  m-2">
                                <div className="service-img">
                                    <img className="w-50" src={pd?.image} alt="" />
                                </div>
                                <h1>by {pd.traveller}</h1>
                                <p>{pd.title}</p>
                                <p>{pd.shortDescription}</p>
                                {/* <p className="text-danger">{pd.price}৳</p> */}
                                <Link to={`/purchasing/${pd._id}`}>
                                    {" "}
                                    <button className="btn btn-success">READ MORE</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FirstPageService;

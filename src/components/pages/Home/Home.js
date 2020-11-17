// import React, { useState } from "react";
import Bannner from "../Bannner/Bannner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RentCollection from "../RentCollection/RentCollection";
import Services from "../Services/Services";
import './Home.scss';
import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import Loading from "../../utilities/Loading";


import Loading from "../../utilities/Loading";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [hotelsInfo, setHotelsInfo] = useState([]);

    // console.log(hotelsInfo);

    // //to add hotels data to database
    // const handleAddHotels = (e) => {
    //     fetch("http://localhost:5000/addHotels", {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(hotelsData),
    //     });
    // };

    //to show hotels
    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             setLoading(true);
    //             const response = await Axios.get("http://localhost:5000/showHotels");
    //             setHotelsInfo(response.data);
    //             setLoading(false);
    //         } catch (error) {
    //             setLoading(false);
    //         }
    //     };
    //     getData();
    // }, []);

    return (
        <div>
            <Header></Header>
            <Bannner></Bannner>
            <RentCollection/>
            <Services/>
            <Footer/>
       
        </div>
    );
};

export default Home;

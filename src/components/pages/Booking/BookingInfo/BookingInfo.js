import React, { useEffect, useState } from "react";
import Axios from "axios";

const q = () => {
    const [loading, setLoading] = useState(false);
    const [hotelsDetails, setHotelsDetails] = useState([]);

    //to show hotels
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await Axios.get("https://still-badlands-39141.herokuapp.com/showHotels");
                setHotelsDetails(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return <></>;
};

export default q;

import React, { useContext, useEffect, useState } from "react";
// import Axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import "./BookingDetails.scss";
import { RentsContext } from "../../../../App";

const BookingDetails = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [rentsDetails] = useContext(RentsContext);
    const [bookingInfo, setBookingInfo] = useState({});
    const { rentID } = useParams();
    const { register, handleSubmit, errors } = useForm();

    const [name, setName] = useState({
        name: "",
    });
    const [phone, setPhone] = useState({
        phone: "",
    });
    const [email, setEmail] = useState({
        email: "",
    });
    const [message, setMessage] = useState({
        message: "",
    });

    const handleName = (e) => {
        const newName = { ...name };
        newName.name = e.target.value;
        setName(newName);
    };
    const handlePhone = (e) => {
        const newPhone = { ...phone };
        newPhone.phone = e.target.value;
        setPhone(newPhone);
    };
    const handleEmail = (e) => {
        const newEmail = { ...email };
        newEmail.email = e.target.value;
        setEmail(newEmail);
    };
    const handleMessage = (e) => {
        const newMessage = { ...message };
        newMessage.message = e.target.value;
        setMessage(newMessage);
    };

    const onSubmit = () => {
        const newRent = {
            ...name,
            ...phone,
            ...email,
            ...message,
            bookingInfo,
        };
        fetch("https://still-badlands-39141.herokuapp.com/addRentsInfo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newRent),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result === true) {
                    history.push("/");
                }
            });
    };

    useEffect(() => {
        const rents = rentsDetails.find((rent) => rent._id === rentID);
        setBookingInfo(rents);
    }, [rentsDetails, rentID]);

    return (
        <section className="booking-main container">
            <div className="row">
                <div className="col-md-7 p-3">
                    <img src={bookingInfo.image1} alt="" />
                    <div className="row">
                        <div className="col-md-3 p-3">
                            <img src={bookingInfo.image2} alt="" />
                        </div>
                        <div className="col-md-3 p-3">
                            <img src={bookingInfo.image3} alt="" />
                        </div>
                        <div className="col-md-3 p-3">
                            <img src={bookingInfo.image4} alt="" />
                        </div>
                        <div className="col-md-3 p-3">
                            <img src={bookingInfo.image5} alt="" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h2>{bookingInfo.name}</h2>
                        <h1>${bookingInfo.price}</h1>
                    </div>
                    <p>{bookingInfo.about}</p>
                    <h3>Price Details</h3>
                    <p>{bookingInfo.priceDetails}</p>
                    <h3>Property Details</h3>
                    <p>{bookingInfo.propertyDetails}</p>
                </div>
                <div className="col-md-5 p-3">
                    <form className="p-5 pt-0" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="form-control py-3 mb-2"
                            type="name"
                            name="name"
                            ref={register({ required: true, pattern: /^[a-zA-Z '.-]*$/ })}
                            onChange={handleName}
                            placeholder="FULL NAME"
                        />
                        {errors.name && <span>This field is required</span>}
                        <input
                            className="form-control py-3 mb-2"
                            type="number"
                            name="number"
                            ref={register({ required: true, maxLength: 13 })}
                            onChange={handlePhone}
                            placeholder="PHONE NO."
                        />
                        {errors.number && <span>This field is required</span>}
                        <input
                            className="form-control py-3 mb-2"
                            type="email"
                            name="email"
                            ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
                            onChange={handleEmail}
                            placeholder="EMAIL ADDRESS"
                        />
                        {errors.email && <span>This field is required</span>}
                        <textarea
                            className="form-control py-3 mb-2"
                            name="massage"
                            rows="10"
                            ref={register({ required: true })}
                            onChange={handleMessage}
                            placeholder="MASSAGE"
                        ></textarea>
                        <input className="form-control btn mb-2" type="submit" value="Request Booking" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BookingDetails;

// useEffect(() => {
//     const getData = async () => {
//         try {
//             setLoading(true);
//             const response = await Axios.get("https://still-badlands-39141.herokuapp.com/showHotels");
//             setRentDetails(response.data);
//             setLoading(false);
//         } catch (error) {
//             setLoading(false);
//         }
//     };
//     getData();
// }, []);


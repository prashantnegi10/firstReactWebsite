import React, { useState } from "react";

const Contact = () => {
    const [data, setdata] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: ""
    });

    const inputevent = ((event) => {
        const { name, value } = event.target;
        setdata((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    });

    const formsubmit = (e) => {
        e.preventDefault();
        alert("form submited");
    };

    return (
        <>
            <div className="my-4">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formsubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="name" name="fullname" value={data.fullname} onChange={inputevent} class="form-control" id="exampleFormControlInput1" placeholder="Enter Full Name" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" name="phone" value={data.phone} onChange={inputevent} class="form-control" id="exampleFormControlInput1" placeholder="Enter Phone Number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" name="email" value={data.email} onChange={inputevent} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea name="msg" value={data.msg} onChange={inputevent} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary mb-5">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
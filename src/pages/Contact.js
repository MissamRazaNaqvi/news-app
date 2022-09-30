import React from 'react'

export default function Contact() {
    return (
        <div>
            <h1 className='text-center my-5 '>Contact Me</h1>
            <div className="container">

            <form>
                <div className="form-group ">
                    <label to="formGroupExampleInput">Your Name </label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name"/>
                </div>
                <div className="form-group my-2">
                    <label to="formGroupExampleInput2">E-mail Address</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Email"/>
                </div>
                <button className='btn-primary btn my-2'>Submit</button>
            </form>
            </div>
            
        </div>
    )
}

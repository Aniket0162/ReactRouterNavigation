import React from 'react';
import { useNavigate } from 'react-router';



function ContactUS(props) {
    
    const navigate = useNavigate();


    const handleSubmit = () => {
        alert("Thanks!!!  your connection request is sent Successfully");
        navigate('/about');
    }
    return (
        <div>
           <h1>Please fill the below form to connect with me</h1> 
            <section>
                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Email
                        </label>
                            <input type="email" />
                    </div>
                    <div>
                        <label htmlFor="">Phone no. :
                        </label>
                            <input type="phoneno." />
                    </div>
                    <div>
                        <label htmlFor="">Reason to Connect me.
                        </label>
                            <textarea name="" id=""></textarea>
                    </div>
                    <div>
                     <button>Submit</button>
                     <button>Reset</button>
                    </div>
                   
                </form>
            </section>        
        </div>
    );
}

export default ContactUS;
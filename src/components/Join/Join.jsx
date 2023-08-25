import React, { useRef,useState } from "react";
import './Join.css'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';

const Join = () => {

    


    const [inputValue, setInputValue] = useState('');
    const form = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_53wwjxl',
            'template_x20imi9',
            form.current,
            'OEWh-ueGzaTYjZKMe'
          )
          .then((result) => {
            console.log(result.text);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-start',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Your message has been sent!'
              })
              
              setInputValue(''); 

          }, (error) => {
              console.log(error.text);
          });
          form.current.reset();
      };


    return(
        <div className="join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>    
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>    
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name="user_email" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your Email address" />
                    <button className="btn btn-j">Join  Now</button>
                </form>
            </div>
        </div>
    )
} 
export default Join;
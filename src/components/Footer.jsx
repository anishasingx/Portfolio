import React from 'react'
import { FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div className='row bg-primary py-3 px-5'>
        <div className="col-6 d-flex ">
            <div className="mx-2 bg-white"><FaLinkedin size={20} color="#0A66C2" /></div>
            <div className="mx-2 bg-white"><FaWhatsapp size={20} color="#25D366" /></div>
            <div className="mx-2 bg-white"><SiGmail size={20} color="#EA4335" /></div>
            <div className="mx-2 bg-white"><FaTelegram size={20} color="#0088cc" /></div>
        </div>
        <div className="col-6 text-white text-end fw-bold">
            Created By : Anisha Kumari
        </div>
        
    </div>
  )
}

export default Footer

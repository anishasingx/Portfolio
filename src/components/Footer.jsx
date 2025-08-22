import { FaLinkedinIn, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
     <div className="fw-bold my-3 bg-primary py-3 px-5">
        <div className="row justify-content-evenly">
             <div className="col-6 d-flex">
                <div className="mx-3 px-1  bg-white animate"><FaLinkedinIn size={15} color="#0A66C2" /></div>
                <div className="mx-3 px-1  bg-white animate"><FaWhatsapp size={15} color="#25D366" /></div>
                <div className="mx-3 px-1  bg-white animate"><SiGmail size={15} color="#E43315" /></div>
                <div className="mx-3 px-1  bg-white animate"><FaTelegram size={15} color="#0088cc" /></div>
            </div>
            <div className="col-6 text-end text-white">Created By : Anisha Kumari</div>
        </div>
     </div>
  )
}

export default Footer
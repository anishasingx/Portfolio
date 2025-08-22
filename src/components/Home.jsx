import profile from  '../../public/profile.png'
import { FaLinkedinIn, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMysql } from "react-icons/si";
import { ReactTyped } from 'react-typed';
const Home = () => {
  return (
    <div name="Home" className='row align-items-center mt-5 pt-3 pt-lg-5' style={{minHeight:400}}> 
      <div className='col-12 col-lg-6 my-3 mt-5'>
            <div className="row align-items-center justify-content-center">
               <div className="col-5 text-end ">
                    <img height={200} src={profile} alt="" />
                </div>
                <div className="col-7">
                    <div className="">
                        <div className="">
                            <span className='fw-bold py-5'>Available on</span>
                            <div className="d-flex">
                                <div className="mx-2"><FaLinkedinIn size={20} color="#0A66C2" /></div>
                                <div className="mx-2"><FaWhatsapp size={20} color="#25D366" /></div>
                                <div className="mx-2"><SiGmail size={20} color="#EA4335" /></div>
                                <div className="mx-2"><FaTelegram size={20} color="#0088cc" /></div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className='fw-bold '>Currently Working on</span>
                            <div className="">
                                <div className='d-flex my-2 '>
                                    <span>Frontend :-</span>
                                    <div className="mx-2"><FaHtml5 size={20} color="#E34F26" /></div>
                                    <div className="mx-2"><FaCss3Alt size={20} color="#1572B6" /></div>
                                    <div className="mx-2"><FaReact size={20} color="#61DBFB" /></div>
                                    <div className="mx-2"><FaBootstrap size={20} color="#7952B3" /></div>
                                </div>
                               
                                <div className="d-flex my-2">
                                    <span>Backend :-</span>
                                    <div className="mx-2"><FaJava size={20} color="#f89820" /></div>
                                    <div className="mx-2"><SiSpringboot size={20} color="#6DB33F" /></div>
                                    <div className="mx-2"><SiHibernate size={20} color="#59666C" /></div>
                                    <div className="mx-2"><SiMysql size={20} color="#4479A1" /></div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  justify-content-evenly mt-3">
                    <button className='btn btn-primary rounded-0 col-4 '>Download CV</button>
                    <button className='btn btn-primary rounded-0 col-4 '>Contact Me</button>
                </div>
            </div>

        </div>

    <div className='col-12 col-lg-6'>
        <div className='chat-bubble'>
            HELLO
        </div>
        <div className=''>
            <p className='display-6'>I'm <span className='fw-bold'> Anisha Kumari</span></p>
          <ReactTyped
                    className='display-3 fw-bold text-danger'
                    strings={["Programmer","Developer","Coder",]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                >  
            </ReactTyped>
        </div>
        <hr />
       <p className="mt-2 small" style={{ textAlign: "justify" }}>
            Seeking a position as a Java Full Stack Developer in a growth-oriented company 
            where I can apply my knowledge of frontend (React.js, HTML, CSS, JavaScript) 
            and backend (Java, Spring Boot, Hibernate, MySQL) to build scalable applications, 
            while continuously learning and improving my technical and problem-solving skills.
        </p>

    </div>
</div>
  )
}

export default Home;

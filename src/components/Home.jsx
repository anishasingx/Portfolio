import profile from '../../public/profile.png'
import { FaLinkedinIn, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaDatabase, FaJava } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMysql, SiSpring } from "react-icons/si";
import { ReactTyped } from 'react-typed';
const Home = () => {
  return (
    <div name="Home" className='row align-items-center my-4 border-bottom border-1 mt-5 pt-3' style={{minHeight:400}}>
        <div className="col-12 col-lg-6 mb-3 mt-5">
            <div className="row align-items-end">
                <div className="col-5 text-end">
                    <img src={profile} alt="" height={200} />
                </div>
               <div className="col-7">
                    <div>
                        <span className='fw-bold'>🌐 Connect with Me</span>
                        <div className="d-flex mb-3">
                            <div className="p-2"><FaLinkedinIn size={20} color="#0A66C2" /></div>
                            <div className="p-2"><FaWhatsapp size={20} color="#25D366" /></div>
                            <div className="p-2"><SiGmail size={20} color="#EA4335" /></div>
                            <div className="p-2"><FaTelegram size={20} color="#0088cc" /></div>
                        </div>
                    </div>
                    <div>
                        <span className='fw-bold'>💻 My Technologies</span>
                        <div className="">
                            <div className='d-flex align-items-center'>
                                <span className="">Frontend</span>
                                <div className="p-2"><FaHtml5 size={20} color="#e34f26" /></div>
                                <div className="p-2"><FaCss3Alt size={20} color="#1572b6" /></div>
                                <div className="p-2"><FaJs size={20} color="#f7df1e" /></div>
                                <div className="p-2"><FaReact size={20} color="#61DBFB" /></div>
                                <div className="p-2"><FaBootstrap size={20} color="#7952B3" /></div>
                            </div>
                            <div className='d-flex align-items-center mb-1'>
                                <span className="">Backend</span>
                                <div className="p-2"><FaJava size={20} color="#f89820" /></div>
                                <div className="p-2"><SiSpring size={20} color="#6DB33F" /></div>
                                <div className="p-2"><SiSpringboot size={20} color="#6DB33F" /></div>
                                <div className="p-2"><SiHibernate size={20} color="#59666C" /></div>
                                <div className="p-2"><SiMysql size={20} color="#4479A1" /></div>
                            </div>
                        </div>
                    </div>
               </div>
               <div className='row justify-content-evenly mt-3'>
                <button className='btn btn-primary rounded-0 col-4 animate'>Download CV</button>
                <button className='btn btn-primary rounded-0 col-4 animate'>Contact Me</button>
               </div>
            </div>
        </div>
        <div className="col-12 col-lg-6">
            <div className="chat-bubble">
                HELLO
            </div>
            <div className='mt-2 border-bottom border-2 pb-3'>
                <p className='fs-1 m-0' >I'm <span className='fw-bold'>Anisha Kumari</span></p>
                <ReactTyped
                    className='display-3 fw-bold text-danger'
                    strings={["Programmer","Developer","Coder",]}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                >  
                </ReactTyped>
            </div>  
            <p className='mt-2 text-justify-custom'>Seeking a position as a Java Full Stack Developer in a growth-oriented company where I can apply my knowledge of frontend (React.js, HTML, CSS, JavaScript) and backend (Java, Spring Boot, Hibernate, MySQL) to build scalable applications, while continuously learning and improving my technical and problem-solving skills.</p>
        </div>
    </div>
  )
}

export default Home
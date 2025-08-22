import pic from '../../public/profile.png'
import {Link} from 'react-scroll'
const Navbar = () => {
  return (
    <div className="navbar bg-light navbar-expand-lg  position-fixed top-0 start-0 end-0 z-3 ">
        <div className="container-fluid px-4">
            <div className="align-items-center d-flex">
                <img height={60} src={pic} className='me-2' />
                <div className='pt-3'>
                    <h5 className='fs-5 my-0'>Anisha</h5>
                    <p className="small">Full Stack Developer</p>
                </div>
            </div>
            <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navbar">
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id="navbar">
                <div className='navbar-nav fs-5 ms-auto' >
                <Link className='nav-link fw-bold animate px-3' to="Home" smooth={true} duration={500} offset={-70} activeClass='active'>Home        </Link>
                <Link className='nav-link fw-bold animate px-3' to="About" smooth={true} duration={500} offset={-70} activeClass='active'>About       </Link>
                <Link className='nav-link fw-bold animate px-3' to="Portfolio" smooth={true} duration={500} offset={-70} activeClass='active'>Portfolio   </Link>
                <Link className='nav-link fw-bold animate px-3' to="Skills" smooth={true} duration={500} offset={-70} activeClass='active'>Skills      </Link>
                <Link className='nav-link fw-bold animate px-3' to="Project" smooth={true} duration={500} offset={-70} activeClass='active'>Projects    </Link>
                <Link className='nav-link fw-bold animate px-3' to="Experience" smooth={true} duration={500} offset={-70} activeClass='active'>Experience  </Link>
                <Link className='nav-link fw-bold animate px-3' to="Contact"    smooth={true} duration={500} offset={-70} activeClass='active'>Contact     </Link>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default Navbar

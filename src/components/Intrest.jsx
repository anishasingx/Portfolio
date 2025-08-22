import { FaMusic, FaCamera, FaLaptopCode, FaPlane, FaFilm } from 'react-icons/fa';
import { GiTennisRacket } from 'react-icons/gi';

const Intrest = () => {
  return (
    <div>
       <div className="display-6 fw-bold my-3 bg-danger text-white p-2"> 🎨 My Hobbies/Intrest</div>
       <div className="row  text-center justify-content-center text-primary ">
        <div>
          <p className='text-center text-dark' style={{textAlign:'justify'}}>First of all, I love music, especially country music, as it always keeps me relaxed and motivated. I have a great interest in photography, capturing special moments and exploring creativity through pictures. Programming is one of my core passions, and I enjoy building and experimenting with new projects to sharpen my skills. Playing badminton is another activity I love, as it helps me stay active and energetic. Traveling to new places gives me fresh experiences and perspectives, while watching movies in my free time helps me relax and enjoy good stories. Altogether, these interests make me a balanced and enthusiastic person, always eager to learn and explore more.</p>
        </div>
          <div className="col-4 p-4">
            <FaMusic className='fs-1 mb-3'/>
            <p>Music</p>
          </div>
          <div className="col-4 p-4 " >
           <FaCamera className='fs-1 mb-3'/>
           <p>Photo</p>
          </div>
          <div className="col-4 p-4 " >
             <FaLaptopCode className='fs-1 mb-3'/>  
             <p>Programming</p>
          </div>
          <div className="col-4 p-4 " >
             <GiTennisRacket  className='fs-1 mb-3'/>
             <p>Badminton</p>
          </div>
          <div className="col-4 p-4  " >
             <FaPlane className='fs-1 mb-3'/>
             <p>Travelling</p>
          </div>
          <div className="col-4 p-4 "   >
            <FaFilm className='fs-1 mb-3'/>
            <p>Movies</p>
          </div>
       </div>
    </div>
  )
}

export default Intrest


const About = () => {
  return (
    <div name="About" className='my-5 text-justify-custom '>
        <hr />
        <div className='display-5 bg-primary  text-light fw-bold p-2 rounded-1 mb-4'>✨ About Me</div>
        <div>
            <p>Hello, I'm  <strong>Anisha</strong>, an enthusiastic and dedicated <strong> Full Stack Java Developer with a strong foundation in Java, Spring Boot, Hibernate, and React.js.</strong> With a background in <strong>Computer Applications (BCA)</strong> , I am passionate about building scalable, user-friendly, and impactful software solutions.</p>
            <p> I enjoy working across both frontend and backend technologies—crafting seamless user experiences with <strong>React.js</strong>, <strong>HTML</strong>,<strong>CSS</strong>, and <strong>JavaScript</strong>, while ensuring robust and efficient backend systems using <strong>Spring Boot</strong>, <strong>Hibernate</strong>, and <strong>MySQL</strong>.</p>
            <p>  I thrive on <strong>problem-solving</strong>, <strong>continuous learning</strong>, and developing projects that make a real difference. My goal is to grow as a developer while contributing to <strong>innovative</strong> and <strong>meaningful software solutions</strong>.</p>
        </div>
        <div>
            <div className="container py-3">
                <table className="table table-bordered text-center table-responsive">
                    <tbody>
                        <tr>
                            <td className=" col-6 col-md-3 p-1 fw-bold bg-body-secondary">First Name - </td>
                            <td className=' col-6 col-md-3 p-1 text-secondary'>Anisha</td>
                            <td className="  col-6 col-md-3 p-1 fw-bold bg-body-secondary">Phone - </td> 
                            <td className=' p-3 text-secondary'>9102881984</td>
                        </tr>
                        <tr>
                            <td className="  col-6 col-md-3 p-1 fw-bold bg-body-secondary">Last Name -</td>
                            <td className='  col-6 col-md-3 p-1 text-secondary'>Kumari</td>
                            <td className=" col-6 col-md-3 p-1 fw-bold bg-body-secondary">Email - </td>
                            <td className='  col-6 col-md-3 p-1 text-secondary'>anishasingh5666@gmail.com</td>
                        </tr>
                        <tr>
                            <td className=" col-6 col-md-3 p-1 fw-bold bg-body-secondary">Date Of Birth - </td>
                            <td className='  col-6 col-md-3 p-1 text-secondary'>12 july 2005</td>
                            <td className=" col-6 col-md-3 p-1 fw-bold bg-body-secondary">Address - </td>
                            <td className='  col-6 col-md-3 p-1text-secondary'>Kathitand , Ratu, Ranchi, Jharkhand-835222</td>
                        </tr>
                        <tr>
                            <td className=" col-6 col-md-3 p-1 fw-bold bg-body-secondary">Nationality -</td>
                            <td className=' col-6 col-md-3 p-1 text-secondary'>Indian</td>
                            <td className="  col-6 col-md-3 p-1 fw-bold bg-body-secondary">Language - </td>
                            <td className=' col-6 col-md-3 p-1 text-secondary'>English, Hindi</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="container my-3 shadow-lg border">
                <div className="row py-3">
                    <div className="display-6 fw-bold my-3 bg-primary text-white p-2">🎓 Education</div>
                    <div className="col-12 col-md-6 p-3 fw-bold">Bachelor Of Computer Application</div>
                    <div className="col-6 col-md-4 p-3">Ranchi University Ranchi</div>
                    <div className="col-6 col-md-2 p-3">2025</div>
                   <div className="container">
                        <div className='progress' style={{height:15}}>
                          <div className="progress-bar text-bg-primary rounded " style={{width:'80%' , height:15, fontSize:8, fontWeight:'bold'}}>80%</div>
                        </div>
                    </div>
                </div>
                 <div className="row py-3">
                    <div className="col-12 col-md-6 p-3 fw-bold">Intermediate</div>
                    <div className="col-6 col-md-4 p-3">Womens College (JAC Board)</div>
                    <div className="col-6 col-md-2 p-3">2022</div>
                   <div className="container">
                        <div className='progress' style={{height:15}}>
                          <div className="progress-bar text-bg-primary rounded " style={{width:'76%' , height:15, fontSize:8, fontWeight:'bold'}}>76%</div>
                        </div>
                    </div>
                </div>
                  <div className="row py-3">
                    <div className="col-12 col-md-6 p-3 fw-bold">Matriculation</div>
                    <div className="col-6 col-md-4 p-3">V.P.M Gyan Niketan School (CBSE)</div>
                    <div className="col-6 col-md-2 p-3">2020</div>
                    <div className="container">
                        <div className='progress' style={{height:15}}>
                          <div className="progress-bar text-bg-primary rounded " style={{width:'70%' , height:15, fontSize:8, fontWeight:'bold'}}>70%</div>
                       </div>
                    </div>
                   
                </div>
                
            </div>
           
        </div>




    </div>
  )
}

export default About

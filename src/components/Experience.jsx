import React from 'react'

const Experience = () => {
    const experiences = [
  {
    year: "2023 - 2024",
    company: "Tech Solutions Pvt. Ltd.",
    title: "Java Developer Intern",
    text: "Worked on Core Java and JDBC to develop small modules and debug existing applications.",
    link: "#"
  },
  {
    year: "2022 - 2023",
    company: "CodeCrafters Technologies",
    title: "Full Stack Trainee",
    text: "Gained hands-on experience in building web apps with Java Spring Boot backend and React frontend.",
    link: "#"
  },
  {
    year: "2021 - 2022",
    company: "Innovative Web Labs",
    title: "Frontend Developer Intern",
    text: "Created responsive UI using HTML, CSS, Bootstrap, and JavaScript for client projects.",
    link: "#"
  },
  {
    year: "2020 - 2021",
    company: "NextGen IT Services",
    title: "Backend Developer Trainee",
    text: "Worked with Hibernate and MySQL to design database models and implement CRUD operations.",
    link: "#"
  },
  {
    year: "2019 - 2020",
    company: "Bright Future Solutions",
    title: "Trainee Software Engineer",
    text: "Assisted in developing small-scale applications and learned Agile methodologies.",
    link: "#"
  }
];
  return (
    <div name="Experience">
      <div className="display-6 fw-bold my-3 bg-danger text-white p-2">🧑‍💻 Experience</div>
        <div className="row">
        {
          experiences.map((data,index)=>
          (
            <div className="col-6 mb-2" style={{fontSize:'.8rem'}}>
            <div className="card border-primary">     
              <h5 className='card-header text-white bg-primary'>{data.year}</h5>
               <div className="card-body">
                  <h4 className='card-title' style={{minHeight:50}}>{data.company}</h4>
                  <h5 className='card-subtitle mb-2 text-body-secondary' style={{minHeight:50}}>{data.title}</h5>
                  <p className='card-text' style={{minHeight:100}}>{data.text}</p>
                  <a href={data.link} className=' btn btn-outline-primary btn-sm'>Know More...</a>
                </div>
            </div>
          </div>
          )
          )
        }
           
      </div>
    </div>
  )
}

export default Experience

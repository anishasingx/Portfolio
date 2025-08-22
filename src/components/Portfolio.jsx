import React from 'react'

const Portfolio = () => {
    const portfolio = [
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    title: "Full Stack Java Intern",
    text: "Worked on developing REST APIs using Spring Boot and integrated them with React frontend.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    title: "E-Commerce Website",
    text: "Designed and developed a complete e-commerce platform with product catalog and payment integration.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=600",
    title: "Portfolio Website",
    text: "A personal portfolio showcasing skills, projects, and contact form built using React and Bootstrap.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    title: "Chat Application",
    text: "Real-time chat app using WebSocket, React frontend and Java backend.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
    title: "Student Management System",
    text: "Created a CRUD application to manage student records using Hibernate and MySQL.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600",
    title: "Blog Platform",
    text: "Developed a blogging platform with user authentication and content management features.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600",
    title: "Blog Platform",
    text: "Developed a blogging platform with user authentication and content management features.",
    link: "#"
  },
  
{
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    title: "Full Stack Java Intern",
    text: "Worked on developing REST APIs using Spring Boot and integrated them with React frontend.",
    link: "#"
  }
];
  return (
    <div name="Portfolio">
      <div className="display-6 fw-bold my-3 bg-success text-white p-2">📂 Portfolio</div>
          <div className='row justify-content-evenly'>
        {portfolio.map((item,index) => (
            <div key={index} className="col-6 col-lg-3 col-md-4 mb-2">
              <div className='card p-2 text-center' style={{fontSize:'.8rem', maxHeight:400, minHeight:400}}>
                <img src={item.image} className='img-fluid' />
                 <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text text-justify-custom">{item.text}</p>
                        <a href={item.link} className='btn btn-primary my-3'>See More</a>
                    </div>
                </div>
            </div>
  
        ))}
    </div>
    </div>
  )
}

export default Portfolio

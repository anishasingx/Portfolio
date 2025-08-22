import React from 'react'

const Testimonal = () => {
    const testimonials = [
  {
    id: 1,
    feedback: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, totam?",
    name: "Anil Kumar",
    role: "Java Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    feedback: "The team was extremely supportive and the project was delivered on time with excellent quality.",
    name: "Priya Sharma",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 3,
    feedback: "Working with them was a great experience, I learned a lot and improved my coding skills.",
    name: "Rahul Mehta",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    id: 4,
    feedback: "Highly professional and dedicated. They understand requirements very well.",
    name: "Sneha Verma",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/women/30.jpg"
  },
  {
    id: 5,
    feedback: "Great communication and coding standards. I would definitely recommend them.",
    name: "Vikram Singh",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/60.jpg"
  },
   {
    id: 6,
    feedback: "Great communication and coding standards. I would definitely recommend them.",
    name: "Vikram Singh",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/60.jpg"
  },
   {
    id: 7,
    feedback: "Great communication and coding standards. I would definitely recommend them.",
    name: "Vikram Singh",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/60.jpg"
  }
];

  return (
  <div>
      <div className="display-6 fw-bold my-3 bg-warning text-white p-2">💬 Testimonials</div>
   <div id="carouselExampleIndicators" className="carousel slide bg-secondary p-5">
      <div className="carousel-indicators">
        {
          testimonials.map((item,index)=>(
            <div key={index}>
            index==0
            ?<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className="active"></button>
            :<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index}></button>
            </div>
            
          ))
        }
      </div>

     <div className="carousel-inner">
      {
      testimonials.map((item, index) => (
      <div className={`carousel-item ${index===0?'active':''}`} key={index}>
        <div className="d-flex align-items-center justify-content-center">
            <div>
              <img src={item.image} className="w-100" alt={item.name}/>
            </div>
            <div className="ps-3 text-white">
              <h2>{item.name}</h2>
              <h5>{item.role}</h5>
              <p>{item.feedback}</p>
            </div>
          </div>
      </div>
      ))}
    </div>

    {/* Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
   </div>
  </div>
  )
}

export default Testimonal

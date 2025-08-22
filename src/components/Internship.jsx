import TIPETemplate from './TIPETemplate';
// Dummy image URLs (you can replace them with local assets or actual URLs)

const Internship = () => {
const internships = [
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    title: "Full Stack Java Intern",
    text: "Worked on developing REST APIs using Spring Boot and integrated them with React frontend.",
    from: "Jun 2023",
    to: "Aug 2023",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
    title: "Frontend Developer Intern",
    text: "Built responsive UI components in React and optimized performance with hooks.",
    from: "Sep 2023",
    to: "Nov 2023",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
    title: "Backend Developer Intern",
    text: "Designed and implemented database schemas in MySQL and connected with Hibernate ORM.",
    from: "Dec 2023",
    to: "Feb 2024",
    link: "#"
  }
];

  return (
   <div>
      <div className="display-6 fw-bold my-3 bg-info text-white p-2">💼 Internship</div>
      <TIPETemplate data={internships}></TIPETemplate>
   </div>
  );
};

export default Internship;

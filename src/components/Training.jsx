import React from 'react'
import TIPETemplate from './TIPETemplate';

const Training = () => {
const trainings = [
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    title: "Web Development",
    text: "Learn how to build modern websites using HTML, CSS, and JavaScript.",
    from: "Jan 2023",
    to: "Mar 2023",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
    title: "Java Programming",
    text: "Understand the basics of Core Java and OOP concepts with projects.",
    from: "Apr 2023",
    to: "Jun 2023",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    title: "Spring Boot",
    text: "Build enterprise-level applications using Spring Boot framework.",
    from: "Jul 2023",
    to: "Sep 2023",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    title: "React JS",
    text: "Learn frontend development with React and create dynamic UIs.",
    from: "Oct 2023",
    to: "Dec 2023",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
    title: "Full Stack Project",
    text: "Work on a complete project integrating Java backend and React frontend.",
    from: "Jan 2024",
    to: "Mar 2024",
    link: "#"
  }
];
  return (
    <>
    <div className="display-6 fw-bold my-3 bg-success text-white p-2">📚 Training</div>
      <TIPETemplate data={trainings}></TIPETemplate>
    </>
  )
}

export default Training

import React from 'react'
import TIPETemplate from './TIPETemplate';

const Project = () => {
      const projects = [
  {
    image: "https://picsum.photos/seed/p1/600/400",
    title: "Task Manager App",
    text: "A web app to track your daily tasks with CRUD operations.",
    from: "Apr 2023",
    to: "May 2023",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/p2/600/400",
    title: "Blog Platform",
    text: "Built with React and Spring Boot, featuring user authentication.",
    from: "Jun 2023",
    to: "Jul 2023",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/p3/600/400",
    title: "Chat Application",
    text: "Real-time messaging app using WebSocket and React.",
    from: "Aug 2023",
    to: "Sep 2023",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/p4/600/400",
    title: "E-Commerce Site",
    text: "Full stack e-commerce with Spring Boot, React, and Stripe integration.",
    from: "Oct 2023",
    to: "Nov 2023",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/p5/600/400",
    title: "Portfolio Website",
    text: "Personal portfolio showcasing projects, built with React and Bootstrap.",
    from: "Dec 2023",
    to: "Jan 2024",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/p6/600/400",
    title: "Expense Tracker",
    text: "Track income and expenses with charts (Chart.js + React + Spring Boot).",
    from: "Feb 2024",
    to: "Mar 2024",
    link: "#"
  },
  {
    image: "https://picsum.photos/seed/p7/600/400",
    title: "Social Media Mockup",
    text: "Simple social feed interface with React state management.",
    from: "Apr 2024",
    to: "May 2024",
    link: "#"
  }
];
  return (
    <div name="Project">
      <div className="display-6 fw-bold my-3 bg-warning text-dark p-2">🚀 Projects</div>
      <TIPETemplate data={projects}></TIPETemplate>
    </div>
  )
}

export default Project

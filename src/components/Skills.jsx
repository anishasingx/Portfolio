// Frontend
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJquery } from "react-icons/si";

// Backend
import { FaJava } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiMysql } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

// Tools & IDEs
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { SiEclipseide, SiIntellijidea } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
//Soft Skills
import { FaBrain, FaUsers, FaClock, FaComments } from "react-icons/fa";
import Accordion from "./Accordion";

const Skills = () => {
const frontend = [
  { icon: <FaHtml5 size={40} color="#e34f26" />, label: "HTML5", percent: 85, color: "danger" },
  { icon: <FaCss3Alt size={40} color="#1572b6" />, label: "CSS3", percent: 65, color: "primary" },
  { icon: <FaJs size={40} color="#f7df1e" />, label: "JavaScript", percent: 70, color: "warning" },
  { icon: <FaBootstrap size={40} color="#7952B3" />, label: "Bootstrap", percent: 75, color: "#7952B3" },
  { icon: <SiJquery size={40} color="#0769ad" />, label: "jQuery", percent: 60, color: "#0769ado" },
  { icon: <FaReact size={40} color="#61DBFB" />, label: "React", percent: 80, color: "info" },
  ];

  const skills = [
  { label: "HTML5", value: 85,  color: "#e34f26" },
  { label: "CSS3", value: 70, color: "#1572b6" },
  { label: "JavaScript", value: 75, color: "#f7df1e" },
  { label: "React", value: 80, color: "#61DBFB" },
  { label: "Bootstrap", value: 65, color: "#7952B3" },
  { label: "jQuery", value: 60, color: "#0769ad" },
  ];

  const backend = [
    { icon: <FaJava size={40} color="#007396" />, label: "Core Java", percent: 85, color: "primary" },
    { icon: <FaJava size={40} color="#e76f00" />, label: "Advanced Java", percent: 75, color: "warning" },
    { icon: <SiSpringboot size={40} color="#6DB33F" />, label: "Spring", percent: 70, color: "success" },
    { icon: <SiSpringboot size={40} color="#4CAF50" />, label: "Spring Boot", percent: 80, color: "success" },
    { icon: <SiHibernate size={40} color="#59666C" />, label: "Hibernate", percent: 65, color: "secondary" },
    ];

    const backendSkills = [
        { label: "Core Java", value: 85, color: "#007396" },
        { label: "Advanced Java", value: 75, color: "#e76f00" },
        { label: "Spring", value: 70, color: "#6DB33F" },
        { label: "Spring Boot", value: 80, color: "#4CAF50" },
        { label: "Hibernate", value: 65, color: "#59666C" },
    ];

     const persistence = [
    { icon: <SiMysql size={40} color="#00758F" />, label: "MySQL", percent: 80, color: "info" },
    { icon: <FaDatabase size={40} color="#444" />, label: "JDBC", percent: 70, color: "secondary" },
    { icon: <FaDatabase size={40} color="#28a745" />, label: "Spring JDBC", percent: 65, color: "success" },
    { icon: <SiHibernate size={40} color="#59666C" />, label: "Hibernate", percent: 75, color: "warning" },
    { icon: <FaDatabase size={40} color="#f39c12" />, label: "JPA", percent: 70, color: "primary" },
    { icon: <FaDatabase size={40} color="#6DB33F" />, label: "Spring Data JPA", percent: 80, color: "success" },
  ];
    const persistenceSkills = [
    { label: "MySQL", value: 80, color: "#00758F" },
    { label: "JDBC", value: 70, color: "#444" },
    { label: "Spring JDBC", value: 65, color: "#28a745" },
    { label: "Hibernate", value: 75, color: "#59666C" },
    { label: "JPA", value: 70, color: "#f39c12" },
    { label: "Spring Data JPA", value: 80, color: "#6DB33F" },
  ];

    const tools = [
  { icon: <FaGitAlt size={40} color="#F1502F" />, label: "Git", percent: 85, color: "danger" },
  { icon: <FaGithub size={40} color="#000000" />, label: "GitHub", percent: 80, color: "dark" },
  { icon: <VscVscode size={40} color="#007ACC" />, label: "VS Code", percent: 90, color: "primary" },
  { icon: <SiEclipseide size={40} color="#2C2255" />, label: "Eclipse IDE", percent: 70, color: "secondary" },
  { icon: <SiIntellijidea size={40} color="#000000" />, label: "IntelliJ IDEA", percent: 75, color: "dark" },
];

const toolsSkills = [
  { label: "Git", value: 85, color: "#F1502F" },
  { label: "GitHub", value: 80, color: "#000000" },
  { label: "VS Code", value: 90, color: "#007ACC" },
  { label: "Eclipse IDE", value: 70, color: "#2C2255" },
  { label: "IntelliJ IDEA", value: 75, color: "#000000" },
];

// Soft Skills (with icons for UI cards/grid)
const softSkills = [
  { icon: <FaBrain size={40} color="#FF6B6B" />, label: "Problem-solving & Debugging", percent: 85, color: "danger" },
  { icon: <FaComments size={40} color="#4ECDC4" />, label: "Communication & Teamwork", percent: 80, color: "info" },
  { icon: <FaClock size={40} color="#FFD93D" />, label: "Time Management", percent: 75, color: "warning" },
  { icon: <FaUsers size={40} color="#6C63FF" />, label: "Adaptability", percent: 70, color: "primary" },
];

// Soft Skills (for charts / progress bars)
const softSkillsData = [
  { label: "Problem-solving & Debugging", value: 85, color: "#FF6B6B" },
  { label: "Communication & Teamwork", value: 80, color: "#4ECDC4" },
  { label: "Time Management", value: 75, color: "#FFD93D" },
  { label: "Adaptability", value: 70, color: "#6C63FF" },
];

  return (
    <div name="Skills">
        <div className="display-6 fw-bold bg-primary text-white p-2">🔥 Professional Skills</div>
        <Accordion id={1} item={"HTML5, CSS3, JavaScript, Bootstrap, Jquery, React"} skills1={frontend} skills2={skills}></Accordion>
        <Accordion id={2} item ={"Core Java, Adv Java, Spring, Spring Boot, Hibernate"}skills1={backend} skills2={backendSkills} ></Accordion>
        <Accordion id={3} item={"MySQL, JDBC, Spring JDBC, Hibernate, JPA, Spring Data JPA"} skills1={persistence} skills2={persistenceSkills}></Accordion>
        <Accordion id={4} item={"Version Control: Git, GitHub, Maven, Apache Tomcat, IntelliJ IDEA, Eclipse, VS Code, etc."} skills1={tools} skills2={toolsSkills}></Accordion>
        <Accordion id={5} item={"Problem-solving & debugging mindset,Strong communication & teamwork,Time management & adaptability"} skills1={softSkills} skills2={softSkillsData}></Accordion>

    </div>
  )
}

export default Skills
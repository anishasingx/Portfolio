import React from 'react'
import ProgressCircle from "./ProgressCircle";

const Accordion = ({id,item,skills1,skills2}) => {
  return (
    <div>
          <div className="accordion my-1">
            <div className="accordion-item">
                <div className="accordion-header">
                    <button className="accordion-button" data-bs-toggle="collapse" data-bs-target={`#${id}`}>
                        {item}
                    </button>
                </div>
                <div className="accordion-collapse collapse show" id={`${id}`}>
                    <div className="accordion-body">
                        <div className="row">
                            <div className="col-8">
                               {
                                  skills1.map((skill,index) => (
                                        <div className="my-3" key={index}>
                                            <div className="mb-2">{skill.icon}</div>
                                            <div className="progress fw-bold" style={{height:15}}>
                                                <div className={`progress-bar text-bg-${skill.color}`} style={{width:`${skill.percent}%`,height:15}}>{skill.label}</div>
                                            </div>
                                        </div>
                                   ))
                               }
                            </div>
                            <div className="col-4">
                            
                                <div className="container mt-4">
                                    {skills2.map((skill, index) => (<ProgressCircle key={index} value={skill.value} color={skill.color} />))}
                                </div>
                          
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion

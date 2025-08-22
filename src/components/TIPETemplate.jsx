import React from 'react'

const TIPETemplate = ({data}) => {
  return (
    <div className='row justify-content-evenly'>
        {data.map((item,index) => (
            <div key={index} className="col-6 col-lg-3 col-md-4 mb-2">
              <div className='card p-2 text-center' style={{fontSize:'.8rem', maxHeight:400, minHeight:400}}>
                <img src={item.image} className='img-fluid' />
                 <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text text-justify-custom">{item.text}</p>
                        <div className="row">
                            <div className="col-6">From {item.from}</div>
                            <div className="col-6">To {item.to}</div>
                        </div>
                        <a href={item.link} className='btn btn-primary my-3'>See More</a>
                    </div>
                </div>
            </div>
  
        ))}
    </div>
  )
}

export default TIPETemplate

import React from 'react'

const Card=({data})=> {
    const cardAll = new Date();
  return (<>
    <div className="col-lg-6 col-xl-4 col-md-6 mt-4 justify-content-center" >
        <div className="card h-100 m-2">
            <img src={data.img} className='card-img-top' alt="..." />
            <div className="card-body">
                <h5 className="card-title text-dark font-weight-bold">
                    {data.name}
                </h5>
                <p className='card-text'>
                    {data.description}
                </p>
                <a href="..." className='nav-link'>Read More</a>
            </div>
            <div className='card-footer py-3 px-4'>
                {
                    `${cardAll.getDate()} ${cardAll.toLocaleString('en-us', { month: 'long' })} ${cardAll.getFullYear()}`
                }
                <span>  No Comments</span>
            </div>
        </div>
    </div>
  </>
  )
}

export default Card;


import ContentHeading from './ContentHeading';
import Card from './Card';
import React from 'react'
 
function FullStack({data}) {
  return (
    <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-xl-12">
        <img
          src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-2048x453.webp"
          alt="FullStack" width={'100%'}
        />
      </div>
      <ContentHeading />
    </div>

    <div className="container">
      <div className="row">
        {data.map((item, index) => {
          if (item.id === "Full stack")
            return <Card key={index} data={item} />;
          return null;
        })}
      </div>
    </div>
  </div>
  )
}

export default FullStack;
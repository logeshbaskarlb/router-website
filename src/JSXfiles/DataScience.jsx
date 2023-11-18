import React from "react";
import ContentHeading from "./ContentHeading";
import Card from "./Card";

function DataScience({ data }) {
  return (
    <div className="container-fluid">
    <div className="row mx-lg-5 ">
      <div className="col-xl-12 heading mx-lg-5 ">
        <h1 className='my-4'>Data Science</h1>
        <img
          src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-2048x453.webp"
          alt="Data Science"
          width={'100%'}
        />
      </div>
    </div>
    <div className="row">
      <ContentHeading />

    </div>
    <div className="container">
    <div className="row">
              {
                  data.map((item,index)=>{
                      if(item.id === 'Datascience') 
                          return <Card key={index} data={item} /> 
                          return null; 
                        })
              }
          </div>
  </div></div>
  );
}
export default DataScience;

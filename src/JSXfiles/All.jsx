import React from 'react'
import ContentHeading from './ContentHeading'
import Card from './Card'


function All({data}) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <img src="https://navee-react-router-clone.netlify.app/static/media/blog-header-2048x315.32246ba3242c4819240c.webp" 
          alt="" 
          className="responsive-image d-sm-none d-md-block" 
          style={{width:'100%',
        boxShadow:"0px -1px 5px rgba(0,0,0.5)"}}
          />
          <ContentHeading/>
        </div>
        <div className="container">
          <div className="row">
            {
              data.map((item,index)=>{
                return <Card key={index} data={item}/>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default All
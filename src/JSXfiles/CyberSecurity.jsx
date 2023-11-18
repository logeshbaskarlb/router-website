import React from "react";
import ContentHeading from "./ContentHeading";
import Card from "./Card";

function CyberSecurity({ data }) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-xl-12">
          <img
            src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-2048x453.webp"
            alt="Cybersecurity" width={'100%'}
          />
        </div>
        <ContentHeading />
      </div>

      <div className="container">
        <div className="row">
          {data.map((item, index) => {
            if (item.id === "Cyber security")
              return <Card key={index} data={item} />;

            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default CyberSecurity;

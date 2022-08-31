import React from "react";

const Card = ({i,flight_number,name,year,details}) => {
    return (
        <div className="space__card" key={i}>
            <h4>
                Flight No. {flight_number}: {name} ({year})
            </h4>
            <p>Details: {details}</p>
        </div>
    );
};

export default Card;

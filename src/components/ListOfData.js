import React from "react";

const ListOfData = ({ data }) => {
  return (
    <div className="books-cn">
      <div className="img-and-title">
        <img src={data.image} alt={data.title || data.firstname}></img>
        <h1>{data.title || data.firstname + " " + data.lastname}</h1>
      </div>
      <p>{data.author || data.username}</p>
      <p>{data.genre || data.email}</p>
      <p>{data.description || data.password}</p>
      <p>{data.publisher || data.website}</p>
      <p>{data.published || data.ip}</p>
    </div>
  );
};
export default ListOfData;

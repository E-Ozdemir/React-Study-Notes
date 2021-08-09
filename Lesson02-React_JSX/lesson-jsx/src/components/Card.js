import React from "react";

//props is immutable , it means read  but state can be changed
// props can not be modified but state can be modified using this.setState

function Card(props) {
  return (
    <div>
      <div className="card">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          style={{ width: "90%" }}
        />
        <div className="container">
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>{props.job}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
//Arrow function------

// const Card = (props) => {
//   return (
//     <div>
//       <div className="card">
//         <img
//           src="https://www.w3schools.com/howto/img_avatar.png"
//           alt="Avatar"
//           style={{ width: "90%" }}
//         />
//         <div className="container">
//           <h4>
//             <b>{props.name}</b>
//           </h4>
//           <p>{props.job}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


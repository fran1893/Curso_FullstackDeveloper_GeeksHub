import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
   // hooks
   const navigate = useNavigate();

   // handlers
   const handleClick = () => {
      navigate("/");
   };
   return (
      <div>
         <h1>About</h1>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            laboriosam molestiae, nulla neque quam odit dolorem ab, blanditiis
            pariatur, voluptate repudiandae aperiam id! At possimus dignissimos
            sunt enim ducimus quasi.
         </p>

         <button onClick={handleClick}>Ir a inicio</button>
      </div>
   );
}

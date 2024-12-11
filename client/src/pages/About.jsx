import React from "react";

export default function About() {
  return (
    <div className="text-slate-900 px-4 py-12 max-w-2xl mx-auto bg-slate-200 mt-4">
      <h1 className="mt-4 text-md ">About Page - MERN Stack & Redux</h1>
      <p className="text-2xl font-bold">
        The MERN Stack is a powerful set of technologies used for building
        dynamic web applications. It consists of: MongoDB: A NoSQL database for
        storing data. Express.js: A web application framework for Node.js,
        simplifying routing and middleware handling. React.js: A frontend
        library for building interactive user interfaces. Node.js: A JavaScript
        runtime that allows server-side scripting. 
        <hr/>
        <h2 className="text-xl font-bold mt-4">Redux</h2>
        Redux is a predictable state
        container for JavaScript apps, often used with React to manage the
        application's state in a central store. It helps maintain consistent
        data across components, making state changes predictable and easier to
        debug. Together, MERN and Redux provide an efficient, scalable
        architecture for building modern, responsive web applications.
      </p>
    </div>
  );
}

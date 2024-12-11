import React from "react";

export default function Home() {
  return (
    <div className="text-slate-900 px-4 py-12 max-w-2xl mx-auto bg-slate-200 mt-10">
      <h1 className="text-2xl font-bold ">
        Welcome to MERN Authentication App!
      </h1>
      <p className="mt-4 text-md ">
        A MERN stack authentication app is a web application built using the
        MERN stack, which includes MongoDB, Express.js, React.js, and Node.js,
        with a focus on implementing user authentication. This type of app
        typically involves the creation of user accounts, login systems, and the
        secure management of user sessions. The authentication process usually
        employs JSON Web Tokens (JWT) or sessions to ensure that users are
        verified and granted access to protected parts of the app. Here's how
        each component of the MERN stack works together in an authentication
        app
        <hr />
        <h2 className="text-xl font-bold mt-4">React Redux</h2>
        <p>
          {" "}
          Incorporating Redux into a MERN stack authentication app helps manage
          the global state of the application, especially when dealing with user
          authentication and session management. Redux is a predictable state
          container that allows you to manage and centralize the application's
          state, including authentication status, user data, and other related
          states.
        </p>
        <hr />
        <p></p>
        This is particularly helpful in large applications where passing props
        through multiple levels of components can become cumbersome. Here I have
        provided a breakdown of how Redux can be integrated into a MERN stack
        authentication app, enhancing the user experience and streamlining state
        management:
      </p>
    </div>
  );
}

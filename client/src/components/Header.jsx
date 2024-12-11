import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [image, setImage] = useState();

  // This code sets up a timer to check the local storage every second (1000 milliseconds). If the local storage has changed, the component is updated with the new value.
  useEffect(() => {
    const intervalId = setInterval(() => {
      const storedImage = localStorage.getItem("image");
      if (storedImage !== image) {
        setImage(storedImage);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [image]);

  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-4 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={image || currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
          {/* <Link to="/sign-up">Sign Up</Link>
          <Link to="/profile">Profile</Link> */}
        </ul>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const {currentUser} = useSelector((state) => state.user);
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
            <img src={currentUser.profilePicture} alt="profile"
            className="h-7 w-7 rounded-full object-cover"
             />
          ) : (
            <li>Sign In</li>
          )
          }
          </Link>
          {/* <Link to="/sign-up">Sign Up</Link>
          <Link to="/profile">Profile</Link> */}
        </ul>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to="/">
         <h1 className='font-bold'>Auth App</h1>
        </Link>
        <ul className='flex gap-4 font-semibold'>
            <Link to="/">Home</Link>
            <Link to="/sign-in">Sign In</Link>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/profile">Profile</Link>  
        </ul>
      </div>
    </div>
  )
}

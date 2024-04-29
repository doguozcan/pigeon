import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { GoSignOut } from "react-icons/go"
import { supabase } from "../api/supabaseClient"

const handleSignOut = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log(error)
  }
}

const Navbar = () => {
  return (
    <div className="flex flex-col gap-5 text-sm sm:text-xl text-sky-50 mx-2">
      <Link
        to="/"
        className="flex items-center p-5 gap-5 rounded-xl bg-sky-500 hover:bg-sky-700 active:bg-sky-900 transition duration-300"
      >
        <FaHome />
        Home
      </Link>
      <Link
        to="/profile"
        className="flex items-center p-5 gap-5 rounded-xl bg-sky-500 hover:bg-sky-700 active:bg-sky-900 transition duration-300"
      >
        <FaUser />
        Profile
      </Link>
      <div
        className="flex items-center p-5 gap-5 rounded-xl bg-sky-500 hover:bg-sky-700 active:bg-sky-900 transition duration-300"
        onClick={handleSignOut}
      >
        <GoSignOut />
        <div>Sign out</div>
      </div>
    </div>
  )
}
export default Navbar

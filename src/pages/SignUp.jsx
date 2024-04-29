import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-xl text-white">
      <div className="flex gap-2 mb-2">
        <p>
          welcome to <span className="text-sky-500 animate-pulse">pigeon</span>
        </p>
        <p className="animate-bounce">🐦</p>
      </div>
      <p className="mb-2">sign up now</p>
      <form className="flex flex-col gap-2 items-center w-full mb-12">
        <label htmlFor="email">email</label>
        <input
          id="email"
          className="outline-none bg-sky-900 p-2 rounded-xl w-full max-w-sm"
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          className="outline-none bg-sky-900 p-2 rounded-xl w-full max-w-sm"
        />
        <button className="bg-sky-900 px-2 py-1 rounded-xl">submit</button>
      </form>
      <p>already have an account?</p>
      <Link
        to="/sign-in"
        className="hover:text-sky-900 transition duration-300"
      >
        sign in now
      </Link>
    </div>
  )
}
export default SignUp

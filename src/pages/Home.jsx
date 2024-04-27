import Navbar from "../components/Navbar"
import PostForm from "../components/PostForm"
import Post from "../components/Post"

const Home = () => {
  return (
    <div className="flex m-5 max-w-5xl mx-auto gap-5">
      <div className="w-1/3">
        <Navbar />
      </div>
      <div className="w-2/3">
        <PostForm />
        <Post />
      </div>
    </div>
  )
}
export default Home

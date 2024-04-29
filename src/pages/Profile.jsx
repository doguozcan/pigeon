import Navbar from "../components/Navbar"
import ProfileHeader from "../components/ProfileHeader"
import Post from "../components/Post"

const Profile = () => {
  return (
    <div className="flex m-5 max-w-5xl mx-auto gap-5">
      <div className="w-1/3">
        <Navbar />
      </div>
      <div className="w-2/3">
        <ProfileHeader />
        <Post />
      </div>
    </div>
  )
}
export default Profile

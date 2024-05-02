import Navbar from "../components/Navbar"
import ProfileHeader from "../components/ProfileHeader"
import Post from "../components/Post"
import { useAuth } from "../hooks/useAuth"
import { useEffect, useState } from "react"
import { supabase } from "../api/supabaseClient"

const Profile = () => {
  const { user } = useAuth()
  const [profileName, setProfileName] = useState("")
  const [profileAvatar, setProfileAvatar] = useState("")
  const [posts, setPosts] = useState([])

  const fetchProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", user.id)
      .single()

    if (data) {
      setProfileName(data.name)
      setProfileAvatar(data.avatar)
      console.log(data)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("id, created_at, content, profiles(name, avatar)")
      .order("created_at", { ascending: false })
      .eq("user_id", user.id)

    if (error) {
      console.log(error)
    }

    if (data) {
      setPosts(data)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="flex m-5 max-w-5xl mx-auto gap-5">
      <div className="w-1/3">
        <Navbar />
      </div>
      <div className="w-2/3">
        <ProfileHeader profileName={profileName} avatar={profileAvatar} />
        {posts.map((post) => (
          <Post
            key={post.id}
            profileAvatar={post.profiles.avatar}
            profileName={post.profiles.name}
            content={post.content}
            time={post.created_at}
          />
        ))}
      </div>
    </div>
  )
}
export default Profile

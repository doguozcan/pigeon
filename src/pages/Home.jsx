import Navbar from "../components/Navbar"
import PostForm from "../components/PostForm"
import Post from "../components/Post"
import { useAuth } from "../hooks/useAuth"
import { supabase } from "../api/supabaseClient"
import { useState, useEffect } from "react"

const Home = () => {
  const { user } = useAuth()
  const [profileName, setProfileName] = useState("")
  const [profileAvatar, setProfileAvatar] = useState("")

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

    if (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return (
    <div className="flex m-5 max-w-5xl mx-auto gap-5">
      <div className="w-1/3">
        <Navbar />
      </div>
      <div className="w-2/3">
        <PostForm profileAvatar={profileAvatar} profileName={profileName} />
        <Post profileAvatar={profileAvatar} />
      </div>
    </div>
  )
}
export default Home

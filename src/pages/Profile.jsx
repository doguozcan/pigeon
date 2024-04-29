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

  return (
    <div className="flex m-5 max-w-5xl mx-auto gap-5">
      <div className="w-1/3">
        <Navbar />
      </div>
      <div className="w-2/3">
        <ProfileHeader profileName={profileName} avatar={profileAvatar} />
        <Post />
      </div>
    </div>
  )
}
export default Profile

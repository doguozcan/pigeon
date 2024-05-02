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
    }

    if (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from("posts")
      .select("id, created_at, content, profiles(name, avatar, id)")
      .order("created_at", { ascending: false })

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

  const updatePosts = async (newPost) => {
    const { data, error } = await supabase
      .from("posts")
      .select("id, created_at, content, profiles(name, avatar, id)")
      .eq("id", newPost.id)

    if (error) {
      console.log(error)
    }

    if (data) {
      setPosts([data[0], ...posts])
    }
  }

  const removePostFromPosts = async (postId) => {
    setPosts(posts.filter((post) => post.id !== postId))
  }

  return (
    <div className="flex m-5 max-w-5xl mx-auto gap-5">
      <div className="w-1/3">
        <Navbar />
      </div>
      <div className="w-2/3">
        <PostForm
          userId={user.id}
          profileAvatar={profileAvatar}
          profileName={profileName}
          updatePosts={updatePosts}
        />
        {posts.map((post) => {
          const postProps = {
            id: post.id,
            profileAvatar: post.profiles.avatar,
            profileName: post.profiles.name,
            content: post.content,
            time: post.created_at,
          }

          if (post.profiles.id === user.id) {
            postProps.deleteButton = true
          }

          return (
            <Post key={post.id} {...postProps} onDelete={removePostFromPosts} />
          )
        })}
      </div>
    </div>
  )
}
export default Home

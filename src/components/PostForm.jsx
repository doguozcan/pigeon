import { useState } from "react"
import { supabase } from "../api/supabaseClient"

const PostForm = ({ profileAvatar, profileName, userId }) => {
  const [content, setContent] = useState("")

  const insertPost = async () => {
    const { error } = await supabase
      .from("posts")
      .insert({ user_id: userId, content })

    if (error) {
      console.log(error)
    }

    setContent("")
  }

  return (
    <div className="bg-sky-100 p-5 rounded-xl mx-2">
      <div className="flex items-start gap-5">
        <img
          src={profileAvatar}
          className="w-16 h-16 rounded-full object-cover"
        />
        <textarea
          className="bg-sky-100 flex-auto text-sky-900 placeholder:text-sky-800 outline-none"
          placeholder={`what is happening, ${profileName}?`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          className="bg-sky-500 hover:bg-sky-700 active:bg-sky-900 text-sky-50 py-2 px-4 rounded-xl disabled:bg-sky-950"
          onClick={insertPost}
          disabled={!content}
        >
          send
        </button>
      </div>
    </div>
  )
}
export default PostForm

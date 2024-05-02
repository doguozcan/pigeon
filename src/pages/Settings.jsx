import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import { useAuth } from "../hooks/useAuth"
import { supabase } from "../api/supabaseClient"
import Hr from "../components/Hr"

const Settings = () => {
  const [name, setName] = useState("")
  const { user } = useAuth()

  const fetchProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", user.id)
      .single()

    if (data) {
      setName(data.name)
    }

    if (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  const handleChangeName = async () => {
    const { error } = await supabase
      .from("profiles")
      .update({ name })
      .eq("id", user.id)

    if (error) {
      console.log(error)
    }
  }

  const handleChangeProfilePicture = async (e) => {
    const file = e.target.files[0]
    const fileId = crypto.randomUUID()

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(fileId, file)

    if (error) {
      console.log(error)
    }

    if (data) {
      const avatar = `${
        import.meta.env.VITE_SUPABASE_URL
      }/storage/v1/object/public/avatars/${fileId}`

      const { data, error } = await supabase
        .from("profiles")
        .update({ avatar })
        .eq("id", user.id)

      if (error) {
        console.log(error)
      }

      if (data) {
        console.log(data)
      }
    }
  }

  return (
    <div className="flex m-5 max-w-5xl mx-auto gap-5">
      <div className="w-1/3">
        <Navbar />
      </div>
      <div className="w-2/3">
        <div className="bg-sky-100 p-5 rounded-xl mx-2">
          <div className="flex flex-col gap-2">
            <label>your name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button
              className="bg-sky-900 text-sky-50 rounded-xl p-2"
              onClick={handleChangeName}
            >
              change
            </button>
          </div>
          <Hr />
          <div className="flex flex-col gap-2">
            <label>profile picture</label>
            <input type="file" onChange={handleChangeProfilePicture} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Settings

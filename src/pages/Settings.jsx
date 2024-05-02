import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import { useAuth } from "../hooks/useAuth"
import { supabase } from "../api/supabaseClient"

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
        </div>
      </div>
    </div>
  )
}
export default Settings

import Navbar from "../components/Navbar"

const Settings = () => {
  return (
    <div className="flex m-5 max-w-5xl mx-auto gap-5">
      <div className="w-1/3">
        <Navbar />
      </div>
      <div className="w-2/3">
        <div className="bg-sky-100 p-5 rounded-xl mx-2">settings</div>
      </div>
    </div>
  )
}
export default Settings

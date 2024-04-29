const PostForm = ({ profileAvatar, profileName }) => {
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
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-sky-500 hover:bg-sky-700 active:bg-sky-900 text-sky-50 py-2 px-4 rounded-xl">
          send
        </button>
      </div>
    </div>
  )
}
export default PostForm

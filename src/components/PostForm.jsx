const PostForm = () => {
  return (
    <div className="bg-sky-100 p-5 rounded-xl mx-2">
      <div className="flex items-start gap-5">
        <img
          src="https://images.unsplash.com/photo-1595347097560-69238724e7bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-16 h-16 rounded-full object-cover"
        />
        <textarea
          className="bg-sky-100 flex-auto text-sky-900 placeholder:text-sky-800 outline-none"
          placeholder="what is happening?"
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

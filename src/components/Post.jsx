import { BiComment, BiHeart, BiSend } from "react-icons/bi"

const Post = () => {
  return (
    <div className="bg-sky-100 p-5 rounded-xl mx-2 mt-2">
      <div className="flex flex-col gap-2">
        <div className="flex space-x-2">
          <img
            src="https://images.unsplash.com/photo-1595347097560-69238724e7bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p>
              <span className="font-semibold">John Doe</span> shared a
              <span className="text-sky-500"> text</span>
            </p>
            <p className="font-light">15 minutes ago</p>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quia
          dolorum aperiam aut obcaecati beatae voluptatem, quo possimus rem
          accusantium perferendis quae harum mollitia atque tenetur eligendi
          pariatur repellat eos!
        </p>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <BiHeart />
            <p>7</p>
          </div>
          <div className="flex items-center gap-1">
            <BiComment />
            <p>3</p>
          </div>
        </div>
        <div className="flex gap-2">
          <img
            src="https://images.unsplash.com/photo-1595347097560-69238724e7bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-16 h-16 rounded-full object-cover"
          />
          <textarea
            className="bg-sky-100 flex-auto text-sky-900 placeholder:text-sky-800 outline-none border border-sky-800 rounded-xl p-2"
            placeholder="what are you thinking?"
          />
          <div className="flex items-center">
            <BiSend className="text-sky-900" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post

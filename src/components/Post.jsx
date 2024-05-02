import { format } from "date-fns"

const Post = ({ profileAvatar, content, time, profileName, deleteButton }) => {
  return (
    <div className="bg-sky-100 p-5 rounded-xl mx-2 mt-2">
      <div className="flex flex-col gap-2">
        <div className="flex space-x-2">
          <img
            src={profileAvatar}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p>
              <span className="font-semibold">{profileName}</span>
            </p>
            <p className="font-light">
              {format(new Date(time), "d MMMM yyyy, HH:mm")}
            </p>
          </div>
        </div>
        <p>{content}</p>
        {deleteButton && (
          <div className="justify-end flex">
            <button className="bg-red-900 hover:bg-red-950 text-white rounded-xl p-2">
              remove
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
export default Post

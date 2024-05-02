import { BiComment, BiHeart, BiSend } from "react-icons/bi"

const Post = ({ profileAvatar, content, time, profileName }) => {
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
            <p className="font-light">{time}</p>
          </div>
        </div>
        <p>{content}</p>
      </div>
    </div>
  )
}
export default Post

const ProfileHeader = ({ avatar, profileName }) => {
  return (
    <div className="mx-2 relative mb-20">
      <img
        src="https://images.unsplash.com/photo-1579547621869-0ddb5f237392?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-48 object-fill rounded-xl"
      />
      <img
        src={avatar}
        className="w-48 h-48 rounded-full object-cover absolute top-24 left-6"
      />
      <p className="text-white text-xl ml-64">{profileName}</p>
    </div>
  )
}
export default ProfileHeader

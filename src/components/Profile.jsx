import React from 'react'

const Profile = () => {
    return (
      <>
        <div className="h-16 rounded-xl bg-white py-2.5 px-3 flex gap-3 items-start w-full">
          <img
            src="https://wallpapercave.com/wp/wp11330805.jpg"
            alt="profile image"
            width={45}
            height={45}
            className="rounded-full"
          />
 

          {/* username and email */}
          <div>
            <p className="capitalize text-base">dark moon</p>
            <p className="text-gray-400 text-sm">darkmoon@gmail.com</p>
          </div>
        </div>
      </>
    );
}

export default Profile
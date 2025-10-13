import React from "react";
import profileImg from "../assets/prodile-image.png";
import headerBg from "../assets/profile-header-bg.png";

function ProfilePage() {
  return (
    <div>
      <div className="upper_page_profile">
        <div
          className={`profile_header p-2 max-w-screen pt-5 pb-5 flex flex-col items-center justify-center`}
        >
          <img src={profileImg} className="rounded-full" alt="profile img" />
          <div className="description [&>*]:pb-2">
            <h2 className="text-3xl font-bold text-black">John Doe</h2>
            <div className="title border-black mb-2 mt-2 m-auto border-1 rounded-lg p-1 w-fit">
              Title :<span> StoreKeeper</span>
            </div>
            <div className="email">
              <span>JohnDoe1993@gmail.com</span>
            </div>
            <div className="edit-profile">
              <button className="bg-white text-black font-semibold p-2 rounded-lg mt-2 border border-black hover:bg-black hover:text-white hover:cursor-pointer hover:border hover:border-black">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <div className="profile-options max-w-screen mt-5 flex flex-col justify-center items-center ">
          <div className="option border-1 border-black p-3 text-left rounded-2xl w-[80%] mb-3 hover:cursor-pointer hover:bg-green-200">
            History
          </div>
          <div className="option border-1 border-black p-3 text-left rounded-2xl w-[80%] mb-3 hover:cursor-pointer hover:bg-green-200">
            Pin Code
          </div>
          <div className="option border-1 border-black p-3 text-left rounded-2xl w-[80%] mb-3 hover:cursor-pointer hover:bg-green-200">
            Settings
          </div>
          <div className="option border-1 border-black p-3 text-left rounded-2xl w-[80%] mb-3 hover:cursor-pointer hover:bg-green-200">
            Help & Support
          </div>
          <div className="option border-1 text-red-500 border-black p-3 text-left rounded-2xl w-[80%] mb-3 hover:cursor-pointer hover:bg-green-200">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

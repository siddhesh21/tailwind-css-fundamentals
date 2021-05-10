import React from "react";

function Profile() {
  return (
    <div
      className={`dark:bg-gray-900 flex fex-col text-center sm:text-left sm:items-center sm:flex-row sm:p-10
      ${false && "animate-bounce"}`}
    >
      <img
        className="w-full cursor-pointer sm:w-2/5 sm:rounded-full sm:max-w-sm 
          ring-4 ring-black-700 transition duration-[300ms] ease-in transform hover:scale-110"
        src="https://scontent-dub4-1.cdninstagram.com/v/t51.2885-19/s320x320/145174428_107399804704194_8269024811647391065_n.jpg?tp=1&_nc_ht=scontent-dub4-1.cdninstagram.com&_nc_ohc=r995jsBNjDEAX_toB0M&tn=S-q4JPK61V-z1sLG&edm=ABfd0MgAAAAA&ccb=7-4&oh=83f647b4c451e93e1d116723e44d5312&oe=60A1506C&_nc_sid=7bff83"
        alt=""
      />
      <div className="mt-5 sm:ml-5 text-purple-800 dark:text-purple-300 ">
        <h1 className="text-5xl iphone:text-purple-500">Siddhesh Kankekar</h1>
      </div>
    </div>
  );
}

export default Profile;

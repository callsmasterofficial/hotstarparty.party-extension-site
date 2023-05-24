import React from 'react'


function Video_content() {
  return (
    <div className='m-auto mt-10 md:flex w-[80%]'>
    <div className="md:ml-4 h-fit -pt[30px]  md:w-[50%] cursor-pointer pt-[20px]">
    <h1 className='text-white text-3xl md:text-4xl font-semibold mb-[20px]'>Enhance Virtual Movie Fun With Fun Chat</h1>

    <p className='text-white'>Enjoy the real-time chat feature and share the viewing experience with existing participants, no matter where they are in the world. Apparently, have a chit-chat with all the co-watchers while enjoying the Netflix Watch Party. Enhance your experience by discussing the videos currently playing, and feel like they are sitting next to you.</p>
    </div>
     <div className='video-box ml-2 md:w-[50%] md:mt-0'>
        <video controls autoPlay muted src="https://super-dashboard-images-cdn.s3.amazonaws.com/videos/Sync-Netflix-Party-in-HD-Final.mp4"></video>
     </div>
    </div>
  )
}

export default Video_content
import React from 'react';

export function Home() {
  return (
    <>
      {/* Welcome to ResumeScan Component */}
      <div className="d-flex justify-content-center align-content-center mt-5">

        <div className="flex text-center pb-5 border-bottom-1 font-face dark-purple-font fs-3 fw-bold">Welcome to Tasked&copy;</div>

      </div>


      {/* Get Started Now Text */}
      <div className="flex text-center pt-5 pb-5 border-bottom-1 font-face dark-purple-font fs-5"><p className="fw-bold mb-0">Get started now. </p><br /> 1) Navigate to "Tasks"<br />  2) Add some tasks to complete!</div>
      <div className="flex text-center pb-4 t-5">

      </div>
    </>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="text-center py-3 font-face copyright light-purple-bg dark-purple-font p-3">&copy; Created by <a className="medium-purple-font" href="https://www.linkedin.com/in/parsas/">Parsa Khazaeepoul</a>
      </div>
    </footer>
  );
}
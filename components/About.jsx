import React from "react";

export const About = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="false"
      // data-aos-delay="60"
      // data-aos-easing="ease-in-out"
      className="site-wrap md:my-24 mt-9 xs:max-w-xl xs:p-4 lg:max-w-3xl md:max-w-xl   sm:max-w-md max-w-xs  flex  mx-auto h-auto"
    >
      <div>
        <h1 className="text-secondary font-nav  font-medium  nameFontSize tracking-widest">
          Hi,&nbsp; my name is
        </h1>
        {/* <div > */}
        <h1 className=" big-heading  text-bigH font-bold -ml-1.5">
          {/* Renuka Bhagyasri. */}J N D R SURYA KIRAN BALLA
        </h1>
        {/* </div> */}
        {/* big-heading */}
        <h1 className="text-aboutColor lg:text-6xl mt-2 md:text-2xl xs:my-3 font-bold xs:text-2xl xs:-ml-1 -ml-0.5  ">
          {/* xs:text-2xl */}I build WEB applications.
        </h1>
        {/* lg:mt-2 */}
        <p className="text-aboutColor xs:my-7 lg:my-9 max-w-xl tracking-wide xs:-mt-0.5 xs:-ml-0.5 ">
          Hello there! 👋🔗💻 I&apos;m just completed my final year B.Sc.
          studies with a strong passion for technology so, completed my
          internship on &quot;MERN STACK DEVELOPMENT&quot; from &quot;Train A
          Tech private Limited&quot; 🔍 Currently on the lookout for an job
          opportunity to further develop my skills and contribute to a dynamic
          team! 🚀🌐💻 As I delve into the realms of Full Stack Web Development,
          I am eager to fuse my love for tech with the artistry of coding.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          className="xs:my-5"
          href="https://www.linkedin.com/in/surya-kiran-balla-16a01a263"
        >
          <button className="hover:bg-secondary hover:bg-opacity-10 xs:my-7 border-secondary rounded border-2 p-4 mt-1  text-secondary">
            Connect on Linkedin!
          </button>
        </a>
      </div>
    </div>
  );
};

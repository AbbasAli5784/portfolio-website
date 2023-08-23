import { React, useState } from "react";

const Work = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [gitModal, setGitModalOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState({});
  const [currentProject, setCurrentProject] = useState({});

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const codeModal = (github) => {
    setCurrentCode(github);
    setGitModalOpen(true);
  };

  const codeModalClose = () => {
    setGitModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      name="work"
      className="work-section flex w-full h-screen  text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="mt-6">Check out some of my recent work!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div project-div meenCutz">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="flex justify-center text-2xl font-bold text-white tracking -tracking-wider">
                MeenCutz Booking App
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://meencutz.com/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <button
                  onClick={() => {
                    codeModal({
                      frontend:
                        "https://github.com/AbbasAli5784/haircut-frontend.git",
                      backend:
                        "https://github.com/AbbasAli5784/haircut-backend-2.git",
                    });
                  }}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>

                <button
                  onClick={() =>
                    openModal({
                      title: "MeenCutz Booking App",
                      description: ` I created this web app for a local barber as a freelance project. MeenCutz makes it easy for customers to pick from a few haircut and grooming options and book an appointment. The design is clean and simple, so users can quickly choose what they want and when they want it.
                      For the barber, there's a handy dashboard. They can see their schedule, change available times, and get ready for their next customer. The app uses React on the frontend and has a solid backend, showing how tailored software can help a small business run smoothly.`,
                      technology: [
                        "React, ",
                        "Axios, ",
                        "JWT, ",
                        "Material UI, ",
                        "Node.js, ",
                        "Express.js, ",
                        "MongoDB, ",
                        "Bcrypt, ",
                      ],
                      keyFeature: [
                        "-User Authentication: Secure registration, login, and password reset functionalities.",
                        "-Booking System: Users can select services, view available time slots, and manage their bookings.",
                        "-Admin Panel: Admins have the ability to manage bookings, time slots, and services.",
                        "-Data Management: Robust backend with Mongoose schemas for structured data storage in MongoDB.",
                        "-Security: JWT-based authentication and Bcrypt encryption ensure data security.",
                      ],
                    })
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Overview
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div content-div project-div mp3Converter">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="flex justify-center text-2xl font-bold text-white tracking -tracking-wider">
                Youtube To Mp3 Converter
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://iridescent-alpaca-41669a.netlify.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <button
                  onClick={() => {
                    codeModal({
                      frontend:
                        "https://github.com/AbbasAli5784/youtube-download-frontend.git",
                      backend:
                        "https://github.com/AbbasAli5784/youtube-download-backend.git",
                    });
                  }}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
                <button
                  onClick={() =>
                    openModal({
                      title: "Youtube To Mp3 App",
                      description: `The YouTube to MP3 app offers a seamless experience for users to download YouTube videos in MP3 format. Users can input YouTube video URLs through a user-friendly interface on the frontend. Once the video URL is provided, the frontend communicates with the backend to fetch and process the video. The backend is responsible for downloading the YouTube videos and converting them into MP3 format. After processing, the user is provided with a link to download the MP3 file. This integrated solution ensures that users can easily obtain YouTube videos in audio format without any complications.`,
                      technology: [
                        "React, ",
                        "Axios, ",
                        "Ytdl-Core, ",
                        "Body-Parser, ",
                        "Node.js, ",
                        "Express.js, ",
                      ],
                      keyFeature: [
                        "-Dedicated Input Field: Users can easily input YouTube video URLs for conversion.",
                        "-MP3 Download Capability: Enables users to download YouTube videos exclusively in MP3 format.",
                        "-User-friendly Interface: Intuitive design ensures a smooth user experience from input to download.",
                        "-Backend Processing: Efficiently fetches YouTube videos, processes them, and converts them to MP3 format.",
                        "-Download Link Provision: After processing, users are provided with a direct link to download the MP3 file.",
                      ],
                    })
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Overview
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div project-div meetApp">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="flex justify-center text-2xl font-bold text-white tracking -tracking-wider">
                Meet App
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://abbasali5784.github.io/Meet-App/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/AbbasAli5784/Meet-App.git"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <button
                  onClick={() =>
                    openModal({
                      title: "Meet App",
                      description: `The "Meet App" is a tailored web application I developed as a project for my CareerFoundry bootcamp curriculum, the objective of this app is to streamline the event discovery process. Users can easily search for events in specific cities and view detailed information about each event. The app is designed with a focus on user experience, ensuring a seamless and intuitive interaction. It's a progressive web application (PWA) that can function offline and offers a responsive design, making it accessible across various devices. The backend is serverless, ensuring high availability and scalability without the overhead of server maintenance.`,
                      technology: [
                        "React, ",
                        "Google Calendar API, ",
                        "OAuth2, ",
                        "AWS Lambda, ",
                        "Service Workers, ",
                        "Data Visualization Libraries, ",
                      ],
                      keyFeature: [
                        "-City-based Event Filtering: Users can search for events based on cities.",
                        "-Event Details Toggle: Users can view more or less information about an event.",
                        "-Customizable Event Display: Users can specify the number of events they wish to view.",
                        "-Offline Access: The app caches data, allowing users to access previously viewed events without an internet connection.",
                        "-Event Data Visualization: Provides visual insights into the number of upcoming events in each city.",
                      ],
                    })
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Overview
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div project-div myFlix ">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="flex justify-center text-2xl font-bold text-white tracking -tracking-wider">
                MyFlix App
              </span>
              <div className="pt-8 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://my-flix-app-12345325.netlify.app/movies"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <button
                  onClick={() => {
                    codeModal({
                      frontend:
                        "https://github.com/AbbasAli5784/myflix-frontend.git",
                      backend: "https://github.com/AbbasAli5784/demo-repo.git",
                    });
                  }}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Code
                </button>
                <button
                  onClick={() =>
                    openModal({
                      title: "Meet App",
                      description: `The myFlix web application is a comprehensive platform designed for movie enthusiasts. It offers detailed information about a wide range of movies, directors, and genres. Users can sign up, personalize their profiles, and curate lists of their favorite movies. The application is a full-stack solution, with a robust backend API interfacing with a dynamic and responsive frontend built using React.`,
                      technology: [
                        "React, ",
                        "Parcel, ",
                        "Bootstrap, ",
                        "React Redux, ",
                        "MongoDB, ",
                        "Node.js, ",
                        "Express.js ",
                        "JWT, ",
                      ],
                      keyFeature: [
                        "-Dynamic Movie Display: Users can view a comprehensive list of movies and filter through them using a dynamic search feature.",
                        "-Detailed Movie Insights: Access in-depth information about movies, including genre, director, and associated imagery.",
                        "-User Profile Management: Users can sign up, log in, update their details, and manage their list of favorite movies.",
                        "-Responsive Design: A seamless experience across devices, ensuring consistent user interaction whether on mobile or desktop.",
                        "-Secure User Authentication: Robust login and authentication mechanisms to safeguard user data and personalized settings.",
                      ],
                    })
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Overview
                </button>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div project-div pokeDex">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <span className="flex justify-center text-2xl font-bold text-white tracking -tracking-wider">
                PokeDex App
              </span>
              <div className="pt-8 text-center">
                <a href="https://main--velvety-sorbet-8dfe2c.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/AbbasAli5784/simple-app-js.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Overview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div
            className="bg-white p-8 rounded shadow-lg w-1/2 z-10"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <h2 className="flex justify-center text-2xl text-gray-700 mb-4">
              {currentProject.title}
            </h2>
            <p className="text-xl font-bold mt-4 mb-2 text-gray-700">
              Description:
            </p>
            <p className="text-base mt-2  text-gray-700">
              {currentProject.description.split("\n\n")[0]}
            </p>
            <p className="text-xl font-bold mt-4 mb-2  text-gray-700">
              Technologies Used:
            </p>
            <p className="text-base mt-2  text-gray-700">
              {currentProject.technology}
            </p>
            <p className="text-xl font-bold mt-4 mb-2  text-gray-700">
              Key Features:
            </p>
            <p className="text-base mt-2 text-gray-700">
              <ul>
                {currentProject.keyFeature.map((feature, index) => (
                  <li key={index} className="text-base mt-2 text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </p>
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded mt-5"
            >
              Close
            </button>
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-80 "
            onClick={closeModal}
          ></div>
        </div>
      )}

      {gitModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div
            className="bg-white p-8 rounded shadow-lg w-1/2 z-10"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <div className="flex justify-center space-x-8 ">
              <a
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
                href={currentCode.frontend}
              >
                FrontEnd
              </a>

              <a
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                target="_blank"
                rel="noopener noreferrer"
                href={currentCode.backend}
              >
                Backend
              </a>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={codeModalClose}
                className=" bg-red-500 text-white px-4 py-2 rounded mt-5"
              >
                Close
              </button>
            </div>
          </div>
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-80 "
            onClick={closeModal}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Work;

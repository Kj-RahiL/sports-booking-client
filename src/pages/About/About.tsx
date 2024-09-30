import ContactInfo from "../Contact/ContactInfo";

const About = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 md:px-20 text-center">
      {/* Mission Statement */}
      <section className="mb-5 py-10 shadow-[#d8dbdb] shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our mission is to create a platform that connects individuals to
          world-class sports facilities, enabling them to book venues easily and
          focus on what matters most—staying active and healthy.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-5 py-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bottom-2  text-[#001317] ">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-md p-6 shadow-[#001317]">
            <img
              src="/path-to-photo1.jpg"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#001317]">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
            <p className="text-gray-600 mt-2">
              John leads the vision for our platform, bringing years of
              experience in the sports industry.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 shadow-[#001317]">
            <img
              src="/path-to-photo2.jpg"
              alt="Team Member 2"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#001317]">Jane Smith</h3>
            <p className="text-gray-500">CTO</p>
            <p className="text-gray-600 mt-2">
              Jane is responsible for overseeing the technical development of
              our platform.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 shadow-[#001317]">
            <img
              src="/path-to-photo3.jpg"
              alt="Team Member 3"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#001317]">Alex Brown</h3>
            <p className="text-gray-500">Head of Marketing</p>
            <p className="text-gray-600 mt-2">
              Alex develops strategies to connect with users and grow our
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <div className="py-10 shadow-[#d8dbdb] shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Journey</h2>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic text-lg font-bold">2020</time>
              <div className=" from-neutral-800 text-lg">
                {" "}
                Platform launched with 10+ partner sports facilities.
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic text-lg font-bold">2021</time>
              <div className="text-lg from-neutral-800">
                Reached 1,000 active users booking sports venues across the
                country.
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic font-bold text-lg">2022</time>
              <div className="text-lg from-neutral-800">
                {" "}
                Expanded to 50+ partner facilities and introduced mobile app.
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic font-bold text-lg">2023</time>
              <div className="text-lg from-neutral-700">
                Recognized as the leading sports facility booking platform in
                the country.
              </div>
            </div>
            <hr />
          </li>
        </ul>
      </div>
      {/* Contact Information */}

      <ContactInfo />
    </div>
  );
};

export default About;

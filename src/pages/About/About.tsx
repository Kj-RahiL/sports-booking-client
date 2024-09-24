
import ContactInfo from "../Contact/ContactInfo";

const About = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20 text-center">
      {/* Mission Statement */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our mission is to create a platform that connects individuals to
          world-class sports facilities, enabling them to book venues easily and
          focus on what matters most—staying active and healthy.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/path-to-photo1.jpg"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-500">CEO & Founder</p>
            <p className="text-gray-600 mt-2">
              John leads the vision for our platform, bringing years of
              experience in the sports industry.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/path-to-photo2.jpg"
              alt="Team Member 2"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-500">CTO</p>
            <p className="text-gray-600 mt-2">
              Jane is responsible for overseeing the technical development of
              our platform.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <img
              src="/path-to-photo3.jpg"
              alt="Team Member 3"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Alex Brown</h3>
            <p className="text-gray-500">Head of Marketing</p>
            <p className="text-gray-600 mt-2">
              Alex develops strategies to connect with users and grow our
              platform.
            </p>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          <ul className="list-none space-y-8">
            <li className="flex items-center space-x-4">
              <span className="text-xl font-semibold text-blue-600">2020</span>
              <p className="text-gray-600">
                Platform launched with 10+ partner sports facilities.
              </p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-xl font-semibold text-blue-600">2021</span>
              <p className="text-gray-600">
                Reached 1,000 active users booking sports venues across the
                country.
              </p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-xl font-semibold text-blue-600">2022</span>
              <p className="text-gray-600">
                Expanded to 50+ partner facilities and introduced mobile app.
              </p>
            </li>
            <li className="flex items-center space-x-4">
              <span className="text-xl font-semibold text-blue-600">2023</span>
              <p className="text-gray-600">
                Recognized as the leading sports facility booking platform in
                the country.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Information */}

      <ContactInfo/>
      
    </div>
  );
};

export default About;

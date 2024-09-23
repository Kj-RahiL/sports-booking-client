

const Contact = () => {
    return (
      <div className="bg-gray-100 py-20">
          <div className="flex justify-center items-start container mx-auto mt-10 ">
        {/* Left Section */}
        <div className="w-1/2 pr-8">
          <h2 className="text-2xl font-bold mb-4">We are here to help!</h2>
          <p className="text-gray-700 mb-4">
            Let us know how we can best serve you. Use the contact form to email us
            or select from the topics below that best fit your needs. It's an honor
            to support you in your journey towards better health.
          </p>
        </div>
  
        {/* Right Section: Form */}
        <div className="w-1/2">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Comment"
              className="w-full p-2 border border-gray-300 rounded-md row-span-4"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
            >
              SEND MESSAGE
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            This site is protected by reCAPTCHA and the Google 
            <a href="#" className="underline"> Privacy Policy </a> and 
            <a href="#" className="underline"> Terms of Service </a> apply.
          </p>
        </div>
      </div>
      </div>
    );
  };
  
  export default Contact;
  
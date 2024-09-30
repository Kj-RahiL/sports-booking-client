import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-20">
       <ContactInfo/>

       <h2 className="text-center text-4xl py-10 text-[#003039] font-semibold">Feel Free to Message Us</h2>
      <div className="flex flex-col md:flex-row justify-center items-start container mx-auto mt-10 p-4 lg:p-0">
       
        {/* Left Section */}
        <div className="w-full md:w-1/2 md:pr-8 pr-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47565.84672074542!2d91.06079009877054!3d22.854753643238233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a58103900e93%3A0xb7ae99632ba501f1!2z4Kao4KeL4Kef4Ka-4KaW4Ka-4Kay4KeA!5e1!3m2!1sbn!2sbd!4v1727087671999!5m2!1sbn!2sbd"
            height="450"
        
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 mt-5 md:mt-0 ">
          <form className="space-y-4 w-full">
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
              className="button text-white py-2 px-4 rounded-md hover:bg-red-700"
            >
              SEND MESSAGE
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            This site is protected by reCAPTCHA and the Google
            <a href="#" className="underline">
              {" "}
              Privacy Policy{" "}
            </a>{" "}
            and
            <a href="#" className="underline">
              {" "}
              Terms of Service{" "}
            </a>{" "}
            apply.
          </p>
        </div>
      </div>

      {/* contact details */}
     
    </div>
  );
};

export default Contact;

const Contact = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="flex justify-center items-start container mx-auto mt-10 ">
        {/* Left Section */}
        <div className="w-1/2 pr-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47565.84672074542!2d91.06079009877054!3d22.854753643238233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a58103900e93%3A0xb7ae99632ba501f1!2z4Kao4KeL4Kef4Ka-4KaW4Ka-4Kay4KeA!5e1!3m2!1sbn!2sbd!4v1727087671999!5m2!1sbn!2sbd"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
    </div>
  );
};

export default Contact;

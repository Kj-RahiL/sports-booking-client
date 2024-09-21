

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: 'url("https://example.com/your-hero-image.jpg")', // Replace with your image URL
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl font-bold">Welcome to Sports Facility Booking</h1>
        <p className="text-xl mt-4">Book your favorite sports facility with ease!</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;

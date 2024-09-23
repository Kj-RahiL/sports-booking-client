

const Features = () => {
  const featureList = [
    {
      title: 'Easy Booking',
      description: 'Book your sports facilities with just a few clicks!',
      icon: '🖱️',
    },
    {
      title: 'Wide Range of Sports',
      description: 'Choose from a variety of sports facilities available.',
      icon: '🏟️',
    },
    {
      title: 'Secure Payments',
      description: 'Make secure payments through our trusted gateway.',
      icon: '💳',
    },
    {
      title: '24/7 Support',
      description: 'Our team is here to assist you anytime.',
      icon: '💬',
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureList.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

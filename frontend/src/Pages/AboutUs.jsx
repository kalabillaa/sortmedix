import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Bringing Accessible Healthcare Solutions to Rural Communities</p>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src="about.png"
                alt="Our Mission"
                className="rounded-lg shadow-lg h-80 w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-gray-700 text-lg">
                We are a dedicated team of healthcare professionals, technologists, and innovators focused on addressing healthcare challenges in rural and underserved areas. Our mission is to leverage technology and community-driven solutions to provide accessible, affordable, and high-quality medical care to everyone, regardless of their location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our mission is to revolutionize rural healthcare by providing innovative telemedicine solutions. We strive to bring essential medical services to remote areas, where access to healthcare is limited. By combining cutting-edge technology with compassionate care, we aim to bridge the gap between urban and rural healthcare, ensuring that every individual receives the care they deserve.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="Dhruv.jpeg"
              alt="Dhruv Sharma"
              className="mx-auto rounded-full mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Dhruv Sharma</h3>
            <p className="text-gray-600">Backend Developer</p>
            <p className="text-gray-700 mt-4">
              Dhruv is responsible for building and maintaining the backend systems, ensuring the smooth functioning of our telemedicine platform and secure data handling for rural healthcare services.
            </p>
          </div>


          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="Ankit.jpg"
              alt="Ankit Chaudhary"
              className="mx-auto rounded-full mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Ankit Chaudhary</h3>
            <p className="text-gray-600">Frontend Developer</p>
            <p className="text-gray-700 mt-4">
              Ankit is in charge of the frontend development, creating user-friendly interfaces that make it easy for both patients and healthcare providers to navigate the platform, enhancing the overall user experience.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="Shruti.jpeg"
              alt="Shruti Sharma"
              className="mx-auto rounded-full mb-4 w-24 h-24"
            />
            <h3 className="text-xl font-bold">Shruti Sharma</h3>
            <p className="text-gray-600">Database Design Lead</p>
            <p className="text-gray-700 mt-4">
              Shruti leads the database design team, ensuring efficient and secure storage of patient data. Her expertise ensures that the platform's data infrastructure can scale to meet the growing needs of rural healthcare.
            </p>
          </div>

        </div>

      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Rural Health Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;

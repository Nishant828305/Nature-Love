// AboutPage.jsx
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-500 text-white py-24 px-6 text-center">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">About Our Nature Community</h1>
          <p className="text-lg md:text-xl text-green-100">
            A professional platform for individuals and organizations dedicated to
            protecting and celebrating the natural world.
          </p>
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
          alt="Forest landscape"
          className="rounded-2xl shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-6 text-green-700">Our Mission</h2>
          <p className="mb-6 leading-relaxed text-gray-700">
            We strive to cultivate awareness and responsibility for the
            environment by empowering nature lovers and eco-conscious
            professionals worldwide.
          </p>
          <p className="leading-relaxed text-gray-700">
            Our mission is not just about conservation — it’s about innovation,
            collaboration, and sustainable growth for generations to come.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-green-700">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="bg-green-50 rounded-2xl p-8 shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3 text-green-800">Conservation</h3>
              <p className="text-gray-600 leading-relaxed">
                Safeguarding forests, rivers, and wildlife habitats to preserve
                biodiversity and ecological balance.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3 text-green-800">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Promoting renewable practices and eco-friendly solutions that
                minimize environmental impact.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-8 shadow hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-3 text-green-800">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Uniting global citizens, researchers, and organizations to
                inspire collective environmental action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=" text-green py-24 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Join the Movement</h2>
        <p className="max-w-2xl mx-auto mb-8 text-green-700 leading-relaxed">
          Whether you are an individual, a professional, or an organization, your
          contribution matters. Let’s shape a future where people and nature
          thrive together.
        </p>
        <a
          href="/signup"
          className="inline-block px-8 py-3 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
}
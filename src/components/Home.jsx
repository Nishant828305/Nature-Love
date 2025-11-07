

export default function HomePage() {
  return (
  <div className="w-full  sm:px-8 md:px-12 py-16 ">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">
            Embrace the Beauty of Nature
          </h2>
          <p className="text-lg text-gray-600">
            Discover the harmony of life through forests, rivers, and mountains.
            Let’s cherish and protect our planet together.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-2xl shadow-lg hover:bg-green-700 transition">
            Explore More
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
            alt="Nature"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white rounded-t-3xl shadow-inner">
        <h3 className="text-3xl font-bold text-green-700 text-center mb-8">Why Nature?</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold">Fresh Air</h4>
            <p className="mt-3 text-gray-600">Breathe pure air that refreshes body and mind.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold">Peace</h4>
            <p className="mt-3 text-gray-600">Feel calm and connected with nature’s rhythm.</p>
          </div>
          <div className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold">Balance</h4>
            <p className="mt-3 text-gray-600">Restore balance through harmony with earth.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <h3 className="text-3xl font-bold text-green-700 text-center mb-8">Nature Gallery</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <img
            src="https://i.pinimg.com/736x/5e/f1/de/5ef1dea49136f7571a0d86424ec285c8.jpg"
            className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="https://thumbs.dreamstime.com/b/lone-tree-sunset-autumn-s-final-beauty-generative-ai-stunning-ultra-hd-k-photograph-capturing-last-moments-featuring-334810774.jpg"
            className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition"
          />
          <img
            src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
            className="w-full h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-50">
        <h3 className="text-3xl font-bold text-green-700 text-center mb-8">Get in Touch</h3>
        <form className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-400"
          />
          <button className="w-full py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

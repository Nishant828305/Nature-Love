export default function Gallery() {
  // Sample gallery images
  const images = [
    
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    "https://img.freepik.com/free-photo/green-trees-near-body-water-daytime_395237-20.jpg?semt=ais_incoming&w=740&q=80",
    "https://media.istockphoto.com/id/1314793316/photo/nature-inspiration-sunset-mountain-biking.jpg?s=612x612&w=0&k=20&c=H29lBniYX3h5gvwDNRTP1viVYDY8dvIQQTV8q0YQIcw=",
    "https://i.pinimg.com/736x/5e/f1/de/5ef1dea49136f7571a0d86424ec285c8.jpg",
    "https://i.imgur.com/euSCcXsg.jpg",
    "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
    "https://thumbs.dreamstime.com/b/lone-tree-sunset-autumn-s-final-beauty-generative-ai-stunning-ultra-hd-k-photograph-capturing-last-moments-featuring-334810774.jpg",
    "https://wallup.net/wp-content/uploads/2016/01/208826-nature-landscape-water-sea-tropical-748x499.jpg",
    "https://t4.ftcdn.net/jpg/06/15/52/47/360_F_615524747_kr0OuBhFpVHgK0nTryraALXa8aL9XBH5.jpg"
  ];

  return (
    <div className="w-full px-6 sm:px-10 md:px-16 py-16">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-8">🌿 Nature Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Nature ${index + 1}`}
            className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition"
          />
        ))}
      </div>
    </div>
  );
}

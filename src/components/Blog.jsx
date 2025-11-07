export default function Blog() {
  // Sample blog posts
  const posts = [
    {
      title: "The Magic of Forests",
      excerpt: "Forests are not just trees, they are the lungs of our planet...",
      date: "Sep 10, 2025",
      name :"Nishant Kumar"
    },
    {
      title: "Protecting Our Rivers",
      excerpt: "Clean rivers are essential for life. Learn how you can help...",
      date: "Sep 12, 2025",
      name : "Banti kumar"
    },
    {
      title: "The Magic of Forests",
      excerpt: "Forests are not just trees, they are the lungs of our planet...",
      date: "Sep 10, 2025",
      name :"Nishant Kumar"
    },
    {
      title: "Protecting Our Rivers",
      excerpt: "Clean rivers are essential for life. Learn how you can help...",
      date: "Sep 12, 2025",
      name : "Banti kumar"
    },
    {
      title: "The Magic of Forests",
      excerpt: "Forests are not just trees, they are the lungs of our planet...",
      date: "Sep 10, 2025",
      name :"Nishant Kumar"
    },
    {
      title: "Protecting Our Rivers",
      excerpt: "Clean rivers are essential for life. Learn how you can help...",
      date: "Sep 12, 2025",
      name : "Banti kumar"
    },
    {
      title: "The Magic of Forests",
      excerpt: "Forests are not just trees, they are the lungs of our planet...",
      date: "Sep 10, 2025",
      name :"Nishant Kumar"
    },
    {
      title: "Protecting Our Rivers",
      excerpt: "Clean rivers are essential for life. Learn how you can help...",
      date: "Sep 12, 2025",
      name : "Banti kumar"
    },
    {
      title: "The Magic of Forests",
      excerpt: "Forests are not just trees, they are the lungs of our planet...",
      date: "Sep 10, 2025",
      name :"Nishant Kumar"
    },
    {
      title: "Protecting Our Rivers",
      excerpt: "Clean rivers are essential for life. Learn how you can help...",
      date: "Sep 12, 2025",
      name : "Banti kumar"
    },
    {
      title: "The Magic of Forests",
      excerpt: "Forests are not just trees, they are the lungs of our planet...",
      date: "Sep 10, 2025",
      name :"Nishant Kumar"
    },
    {
      title: "Protecting Our Rivers",
      excerpt: "Clean rivers are essential for life. Learn how you can help...",
      date: "Sep 12, 2025",
      name : "Banti kumar"
    },
    {
      title: "The Magic of Forests",
      excerpt: "Forests are not just trees, they are the lungs of our planet...",
      date: "Sep 10, 2025",
      name :"Nishant Kumar"
    },
    {
      title: "Protecting Our Rivers",
      excerpt: "Clean rivers are essential for life. Learn how you can help...",
      date: "Sep 12, 2025",
      name : "Banti kumar"
    },
    {
      title: "The Magic of Forests",
      excerpt: "Forests are not just trees, they are the lungs of our planet...",
      date: "Sep 10, 2025",
      name :"Nishant Kumar"
    },
    {
      title: "Protecting Our Rivers",
      excerpt: "Clean rivers are essential for life. Learn how you can help...",
      date: "Sep 12, 2025",
      name : "Banti kumar"
    },
      {
        title: "The Magic of Forests",
        excerpt: "Forests are not just trees, they are the lungs of our planet...",
        date: "Sep 10, 2025",
        name :"Nishant Kumar"
      },
      {
        title: "Protecting Our Rivers",
        excerpt: "Clean rivers are essential for life. Learn how you can help...",
        date: "Sep 12, 2025",
        name : "Banti kumar"
      },
    {
      title: "Wildlife Conservation Tips",
      excerpt: "Every action counts. Discover practical ways to protect wildlife...",
      date: "Sep 14, 2025",
      name : "Mr nunu"
    }
  ];

  return (
    <div className="w-full px-6 sm:px-10 md:px-16 py-16 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-12">📝 Our Blog</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <span className="text-sm text-gray-500">{post.date}</span>
            <br />
            <b className="text-sm text-gray-500">{post.name}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

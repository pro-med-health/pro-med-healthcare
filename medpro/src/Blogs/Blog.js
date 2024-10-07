import "./Blog.scss";

const Blog = () => {
  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Understanding Telemedicine in Modern Healthcare",
      author: "John Doe",
      date: "2024-10-01",
    },
    {
      id: 2,
      title: "10 Tips for Building User-Friendly Healthcare Apps",
      author: "Jane Smith",
      date: "2024-09-25",
    },
    {
      id: 3,
      title: "Exploring Digital Health Records Systems",
      author: "Emily Johnson",
      date: "2024-09-20",
    },
    {
      id: 4,
      title: "AI in Healthcare: Transforming Patient Care",
      author: "Michael Brown",
      date: "2024-09-15",
    },
    {
      id: 5,
      title: "The Future of Healthcare: Innovation and Technology",
      author: "Sarah White",
      date: "2024-09-10",
    },
    {
      id: 6,
      title: "Building Responsive Medical Websites",
      author: "Chris Green",
      date: "2024-09-05",
    },
    {
      id: 7,
      title: "How Wearable Technology is Changing Healthcare",
      author: "Emma Davis",
      date: "2024-08-30",
    },
    {
      id: 8,
      title: "Patient Data Security in Healthcare Apps",
      author: "Liam Taylor",
      date: "2024-08-25",
    },
    {
      id: 9,
      title: "Advancements in Remote Patient Monitoring",
      author: "Olivia Brown",
      date: "2024-08-20",
    },
    {
      id: 10,
      title: "Blockchain in Healthcare: Securing Patient Data",
      author: "Sophia Wilson",
      date: "2024-08-15",
    },
    {
      id: 11,
      title: "Telehealth vs. Telemedicine: Key Differences Explained",
      author: "James Carter",
      date: "2024-08-10",
    },
    {
      id: 12,
      title: "Improving Patient Engagement Through Mobile Health Apps",
      author: "Mia Clark",
      date: "2024-08-05",
    },
    {
      id: 13,
      title: "Ethical Considerations in AI-Powered Healthcare",
      author: "Henry Turner",
      date: "2024-08-01",
    },
    {
      id: 14,
      title: "Using Big Data to Drive Medical Research",
      author: "Charlotte Lewis",
      date: "2024-07-28",
    },
    {
      id: 15,
      title: "Mental Health and Digital Therapeutics",
      author: "Lucas Mitchell",
      date: "2024-07-25",
    }
  ];


  return (
    <>
      <div className="blogsContainer">
        {blogs.map((blog) => (
          <div key={blog.id} className="blogCard">
            <h3 className="blogTitle">{blog.title}</h3>
            <p className="blogAuthor">Posted by: {blog.author}</p>
            <p className="blogDate">Date: {blog.date}</p>
            <button className="readMoreButton">Read More</button>{" "}
            {/* Read More button */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;

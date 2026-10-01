import "../TravelBlog/TravelBlog.css";
import img1 from "../../assets/pop1.jpeg";
import img2 from "../../assets/pop2.jpeg";
import man1 from "../../assets/man1.jpeg";
import man2 from "../../assets/man2.jpeg";
import recentImage1 from "../../assets/beach1.jpeg";
import recentImage2 from "../../assets/beach2.jpeg";
import recentImage3 from "../../assets/hotel1.jpeg";
import recentImage4 from "../../assets/hotel2.jpeg";
import recentImage5 from "../../assets/hotel3.jpeg";
function TravelBlog() {
  const popularPosts = [
    {
      id: 1,
      title: "Tips on how to travel safely in foreign countries",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      author: "Charlotte Delos",
      role: "Travel Advocate",
      image: img1,
      avatar: man1,
    },
    {
      id: 2,
      title: "Enjoying the beach life while on a vacation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      author: "Adam Cuppy",
      role: "Vlogger",
      image: img2,
      avatar: man2,
    },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Getting the most out of your vacation",
      author: "Aaron Paterson",
      image: recentImage1,
    },
    {
      id: 2,
      title: "Choosing the perfect Safari in Africa",
      author: "Sam Phiphen",
      image: recentImage2,
    },
    {
      id: 3,
      title: "Hiking during the monsoon in Asia",
      author: "Tony Hawk",
      image: recentImage3,
    },
    {
      id: 4,
      title: "Must carry items while traveling to Thailand",
      author: "Himal Turn",
      image: recentImage4,
    },
    {
      id: 5,
      title: "An extremely fun trip to the Swiss Alps",
      author: "Naomi Watts",
      image: recentImage5,
    },
  ];

  return (
    <div className="travel-blog">
      <section className="popular-posts">
        <h1>Popular Posts</h1>

        <div className="popular-posts-list">
          {popularPosts.map((post) => (
            <div className="popular-card" key={post.id}>
              <img
                className="popular-card-image"
                src={post.image}
                alt={post.title}
              />

              <h2>{post.title}</h2>

              <p>{post.description}</p>

              <div className="post-author">
                <img className="post-img" src={post.avatar} alt={post.author} />

                <div>
                  <h3>{post.author}</h3>
                  <span>{post.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="recent-posts">
        <h1>Recent Posts</h1>

        <div className="recent-posts-list">
          {recentPosts.map((post) => (
            <div className="recent-card" key={post.id}>
              <div className="recent-card-content">
                <h2>{post.title}</h2>
                <span>{post.author}</span>
              </div>

              <img src={post.image} alt={post.title} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TravelBlog;

import "./CSS/About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content overflow-allowed">
        <h1>About ShoeCommerce</h1>
        <p>
          Welcome to <strong>ShoeCommerce</strong>, your ultimate destination for the latest and trendiest shoes.
          We provide a seamless shopping experience with a user-friendly interface, secure transactions, and
          a wide variety of footwear to choose from.
          <br />
        </p>

        <h1>Why Choose Us?</h1>
        <ul>
          <li>🔥 Handpicked, high-quality shoes</li>
          <li>🚀 Fast & secure checkout</li>
          <li>📊 Smart filters & sorting for easy selection</li>
          <li>🎯 Easy cart management & instant purchase</li>
          <li>🛍️ Mobile-friendly & smooth UI</li>
        </ul>

        <h1>Tech Stack</h1>
        <p>
          Built with <b>React</b> and modern web technologies to ensure the best shopping experience.
        </p>

        <p className="developer-info">
          Developed by <strong>Saumya Kanti Sarma</strong> 🚀
        </p>
        <span className="note-info">
          <b>NOTE:</b>
          "This project was developed by <a href="https://www.instagram.com/saumya__sarma/">Saumya Sarma</a> to demonstrate his frontend skills. It is not an actual website or a legitimate business."
        </span>

        <br />
        <p style={{ textAlign: "center" }}>Thanks for Visiting...</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

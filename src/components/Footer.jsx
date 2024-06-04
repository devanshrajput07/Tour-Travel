import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <h1>Tour Travel</h1>
        <p>Choose your favourite destination.</p>
      </div>
      <div className="bottom">
        <div>
          <h3>Products</h3>
          <a href="/">Change Log</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h3>Community</h3>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Twitter</a>
          <a href="/">Project</a>
        </div>
        <div>
          <h3>Help</h3>
          <a href="/">Support</a>
          <a href="/">Trouble Shooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h3>Others</h3>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

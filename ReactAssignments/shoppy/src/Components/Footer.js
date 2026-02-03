import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Shoppy. All rights reserved.</p>

      <div style={{ marginTop: "8px" }}>
        <Link to="/privacy">Privacy Policy</Link> |{" "}
        <Link to="/terms">Terms of Service</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;

export default function Footer() {
  return (
    <footer>
      <p className="footer-text">
        © {new Date().getFullYear()} <span>Milan Bomjan Tamang</span> · Kathmandu, Nepal
      </p>
      <p className="footer-text">
        Built with <span>Next.js</span>
      </p>
    </footer>
  );
}
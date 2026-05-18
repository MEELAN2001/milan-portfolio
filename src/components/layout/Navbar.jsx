export default function Navbar() {
  const links = [
    { href: '#experience', label: 'Experience' },
    { href: '#skills',     label: 'Skills' },
    { href: '#projects',   label: 'Projects' },
    { href: '#education',  label: 'Education' },
    { href: '#contact',    label: 'Contact' },
  ];

  return (
    <nav>
      <a href="#" className="nav-logo">
        MBT<span>.dev</span>
      </a>
      <ul className="nav-links">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
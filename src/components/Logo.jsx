import { Link } from "react-router-dom";

export default function Logo({ size, animate = false }) {
  return (
    <Link to={"/"}>
      <img
        className={size}
        src="/images/boolstrack_logo.png"
        alt="Logo"
        {...(animate && { "data-aos": "zoom-in" })}
      />
    </Link>
  );
}

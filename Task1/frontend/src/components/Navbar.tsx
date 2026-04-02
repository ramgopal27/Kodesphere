import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { cart } = useCart();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { dark, setDark } = useTheme();

  const [open, setOpen] = useState(false); // 🔥 sidebar toggle

  const handleSearch = (e: any) => {
    e.preventDefault();
    navigate(`/products?q=${search}`);
  };

  return (
    <>
      {/* 🔝 TOP NAVBAR */}
      <nav className="navbar">
        {/* ☰ Menu */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* 🔥 NEW BRAND NAME */}
        <h2 onClick={() => navigate("/")}>ShopSphere</h2>

        {/* 🔍 Search */}
        <form onSubmit={handleSearch}>
          <input
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        {/* 🌙 Theme */}
        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>

        {/* 🛒 Cart */}
        <Link to="/cart">🛒 ({cart.length})</Link>
      </nav>

      {/* 📌 SIDEBAR */}
      <div className={`sidebar-menu ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>🏠 Home</Link>
        <Link to="/products" onClick={() => setOpen(false)}>📦 Categories</Link>
        <Link to="/wishlist" onClick={() => setOpen(false)}>❤️ Wishlist</Link>
        <Link to="/orders" onClick={() => setOpen(false)}>📦 Orders</Link>
      </div>

      {/* 🔥 OVERLAY */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
}
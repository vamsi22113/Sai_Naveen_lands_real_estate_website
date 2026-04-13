import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  page: string;
}

const navItems: NavItem[] = [
  { label: "Home",     href: "/",         page: "home" },
  { label: "Places",   href: "/#places",  page: "places" },
  { label: "Services", href: "/#services", page: "services" },
  { label: "Reviews",  href: "/#reviews",  page: "reviews" },
  { label: "Contact",  href: "/#contact",  page: "contact" },
];

interface NavbarProps {
  /** Pass the current page key to highlight the correct nav item on non-home pages */
  activePage?: string;
}

const Navbar = ({ activePage }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const isActive = (item: NavItem) => {
    if (activePage) return item.page === activePage;
    if (item.href === "/") return isHome && !location.hash;
    return false;
  };

  const close = () => setMobileOpen(false);

  const renderLink = (item: NavItem, extraCls: string) => {
    const active = isActive(item);
    const cls = `${extraCls} transition-colors duration-200 ${
      active ? "text-white font-semibold" : "text-white/70 hover:text-white"
    }`;

    // "Home" → plain router link to /
    if (item.href === "/") {
      return <Link to="/" className={cls} onClick={close}>{item.label}</Link>;
    }

    // Anchor links that start with /#  (Places, Services)
    // If already on home page, use a simple <a> so the anchor scroll works.
    // If on another page, navigate to / first then the anchor.
    if (item.href.startsWith("/#")) {
      if (isHome) {
        return (
          <a href={item.href.replace("/", "")} className={cls} onClick={close}>
            {item.label}
          </a>
        );
      }
      return (
        <a href={item.href} className={cls} onClick={close}>
          {item.label}
        </a>
      );
    }

    // Contact anchor
    return (
      <a href={item.href} className={cls} onClick={close}>
        {item.label}
      </a>
    );
  };

  return (
    <nav className="sticky top-0 z-20 pt-4 md:pt-8">
      <div className="mx-auto max-w-7xl px-6 pb-4 md:px-8">
        {/* ── Bar ── */}
        <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl">

          {/* Logo */}
          <Link to="/" className="font-serif text-2xl tracking-tight text-white drop-shadow-sm md:text-3xl">
            Sai Naveen Lands<sup className="text-xs">®</sup>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>{renderLink(item, "text-sm")}</li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/book-visit"
            className="hidden rounded-full border border-white/30 bg-white/20 px-6 py-2.5 text-sm text-white backdrop-blur-sm transition-all duration-200 hover:scale-[1.03] hover:bg-white/30 md:inline-block"
          >
            Book Site Visit
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        {mobileOpen && (
          <div className="mt-2 rounded-2xl border border-white/20 bg-white/10 px-6 pb-6 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <li key={item.label}>{renderLink(item, "text-sm")}</li>
              ))}
            </ul>
            <Link
              to="/book-visit"
              className="mt-4 inline-block rounded-full border border-white/30 bg-white/20 px-6 py-2.5 text-sm text-white backdrop-blur-sm"
              onClick={close}
            >
              Book Site Visit
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

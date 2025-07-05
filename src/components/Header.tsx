import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    /*{ path: "/about", label: "About" },
    { path: "/marketplace", label: "Marketplace" },
    { path: "/buyers-guide", label: "Buyers" },
    { path: "/sellers-guide", label: "Sellers" },*/
    { path: "/profile", label: "Profile" },
    { path: "/cart", label: "Cart" },
      { path: "/profile", label: "Profile" },
    { path: "/cart", label: "Cart" },
    { path: "/about", label: "About" },
    { path: "/marketplace", label: "Marketplace" },
    { path: "/buyers-guide", label: "Buyers" },
    { path: "/sellers-guide", label: "Sellers" },
  ];

  return (
    <div className="md:hidden px-4 py-3 border-b flex items-center justify-between bg-white z-50 relative">
      <div className="text-base font-semibold leading-none tracking-tight">
        Compute Portal
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="flex items-center justify-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t z-50 flex flex-col items-start gap-4 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;

import { useState, useEffect } from "react";
import "./Navbar.css";

interface MenuItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  const menuItems: MenuItem[] = [
    { label: "File", href: "#" },
    { label: "Edit", href: "#" },
    { label: "View", href: "#" },
    { label: "Special", href: "#" },
  ];

  useEffect(() => {
    const updateClock = (): void => {
      const time = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(time);
    };

    updateClock();
    const interval = setInterval(updateClock, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="mac-menubar">
      <div className="mac-menubar-content">
        <div className="mac-menubar-left ">
          <img src="/assets/icon_flama.jpg" className="max-h-7" alt="Icon" />
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="mac-menu-item">
              {item.label}
            </a>
          ))}
        </div>
        <div className="mac-menubar-right">
          <span className="mac-clock">{currentTime}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

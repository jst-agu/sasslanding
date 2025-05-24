import { useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import NavItem from '../shared/NavItem';
import { navItems } from '../elements/Navbar';

interface ResponsiveNavbarProps {
  showMenu: boolean;
  closeMenu: () => void
}

const ResponsiveNavbar = ({ showMenu, closeMenu }: ResponsiveNavbarProps) => {
  // Click outside to close mobile menu Logic 
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showMenu, closeMenu])
  // Click outisde to clode Mobile Menu Ends 

  return (
    <div 
      ref={menuRef}
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-[70vh] w-[75%] flex-col 
      justify-between bg-gradient-to-r from-blue-600 
      to-violet-600 p-1 rounded-3xl 
      px-8 pb-6 pt-16 text-heading-1 transition-all duration-200  
      md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card bg-box-bg border border-box-border 
                              rounded-3xl shadow-lg shadow-box-shadow
                              p-8 flex flex-col h-full relative">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        {/* Links  */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {navItems.map((item, index) => (
              <NavItem key={index} href={item.href} text={item.text} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer pl-10">
        <h1>
          Made with ❤ by <a href="https://wa.me/+2347051149394">Agu</a>
        </h1>
      </div>
    </div>
  )
}

export default ResponsiveNavbar
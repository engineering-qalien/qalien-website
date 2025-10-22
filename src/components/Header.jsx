import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1F3440] w-full py-6">
      <div className="w-full max-w-none mx-auto flex justify-between items-center px-8">
        <Link 
          to="/" 
          className="font-bold text-3xl tracking-wide text-[#F2C94C] transition-all duration-200"
        >
          QALIEN AI
        </Link>
        <nav className="flex items-center text-xl font-normal text-[#F2C94C]">
          <a href="https://qalien-master.vercel.app/login" target="_blank" rel="noopener noreferrer" className="hover:underline hover:underline-offset-4 transition-all duration-200">Login</a>
        </nav>
      </div>
    </header>
  );
}
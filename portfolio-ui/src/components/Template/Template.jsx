import { Outlet, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function Template() {
  return (
    <div className="flex flex-col min-h-screen text-base">
      <header className="flex-none h-17.5 bg-brand-dark text-on-brand-dark flex items-center header-bottom-accent">
        <div className="w-full max-w-5xl mx-auto px-4">
          <nav className="flex items-center justify-between py-3">
            <div className="logo">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </div>

            <ul className="hidden md:flex gap-6 items-center text-sm">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'text-accent-red text-[1rem] hover:underline' : 'text-[1rem] hover:underline')}>INICIO</NavLink>
              </li>
              <li>
                <NavLink to="/about-me" className={({ isActive }) => (isActive ? 'text-accent-red text-[1rem] hover:underline' : 'text-[1rem] hover:underline')}>SOBRE MI</NavLink>
              </li>
              <li>
                <NavLink to="/experience" className={({ isActive }) => (isActive ? 'text-accent-red text-[1rem] hover:underline' : 'text-[1rem] hover:underline')}>EXPERIENCIA</NavLink>
              </li>
              <li>
                <NavLink to="/technologies" className={({ isActive }) => (isActive ? 'text-accent-red text-[1rem] hover:underline' : 'text-[1rem] hover:underline')}>TECNOLOGIAS</NavLink>
              </li>
              <li>
                <NavLink to="/contact-me" className={({ isActive }) => (isActive ? 'text-accent-red text-[1rem] hover:underline' : 'text-[1rem] hover:underline')}>CONTACTAME</NavLink>
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Cambiar idioma"
                className="bg-transparent border border-white/20 text-white px-3 py-1 rounded text-sm hover:bg-white/10"
              >
                ES / EN
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 overflow-auto bg-(--brand-dark) text-white">
        <div className="w-full max-w-5xl mx-auto px-4">
          <Outlet />
        </div>
      </main>

      <footer className="flex-none h-12.5 bg-footer text-white flex items-center">
        <div className="w-full max-w-5xl mx-auto px-4 text-center text-[0.75rem]">Code By Moroni Aguilera</div>
      </footer>
    </div>
  );
}

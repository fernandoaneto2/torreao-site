'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SERVICES = [
  { href: '/servicos/projetos-eletricos',     label: 'Projetos Elétricos' },
  { href: '/servicos/fotovoltaica',           label: 'Energia Fotovoltaica' },
  { href: '/servicos/carregadores-eletricos', label: 'Carregadores Elétricos' },
  { href: '/servicos/manutencao-eletrica',    label: 'Manutenção Elétrica' },
  { href: '/servicos/subestacoes-geradores',  label: 'Subestações e Geradores' },
  { href: '/servicos/vigilancia',             label: 'Vigilância' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const base = pathname === '/' ? '' : '/';

  function openMenu() { setIsOpen(true); document.body.style.overflow = 'hidden'; }
  function closeMenu() { setIsOpen(false); setServicesOpen(false); document.body.style.overflow = ''; }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu(); };
    window.addEventListener('scroll', onScroll);
    document.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('scroll', onScroll); document.removeEventListener('keydown', onKey); };
  }, []);

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a className="logo-link" href={pathname === '/' ? '#inicio' : '/'}>
            <img
              className="logo"
              src="/images/logo-torreao-banner.png"
              alt="Logo Torreão Engenharia — Projetos Elétricos"
              loading="eager"
            />
          </a>
        </div>
        <nav className={`navbar-menu${isOpen ? ' open' : ''}`} id="navbarMenu">
          <a href={`${base}#inicio`} className="nav-link" onClick={closeMenu}>Início</a>
          <a href={`${base}#sobre`} className="nav-link" onClick={closeMenu}>Sobre</a>

          <div className={`nav-dropdown${servicesOpen ? ' services-open' : ''}`}>
            <button
              className="nav-link nav-dropdown__trigger"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Serviços
              <svg
                className="nav-dropdown__chevron"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="11"
                height="11"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <ul className="nav-dropdown__menu" role="menu">
              {SERVICES.map((s) => (
                <li key={s.href} role="none">
                  <Link href={s.href} className="nav-dropdown__item" role="menuitem" onClick={closeMenu}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <a href={`${base}#projetos`} className="nav-link" onClick={closeMenu}>Projetos</a>
          <a href={`${base}#processo`} className="nav-link" onClick={closeMenu}>Processo</a>
          <a href={`${base}#contato`} className="nav-link" onClick={closeMenu}>Contato</a>
        </nav>
        <div className="navbar-right">
          <a href="/orcamento" className="navbar-cta">SOLICITAR ORÇAMENTO</a>
        </div>
        <button
          className={`hamburger${isOpen ? ' active' : ''}`}
          id="hamburger"
          aria-label="Abrir menu de navegação"
          onClick={() => (isOpen ? closeMenu() : openMenu())}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

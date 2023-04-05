import { useEffect, useState } from 'react';
import styles from '@/styles/header.module.scss';
import ColorThemeToggleSwitch from './ColorThemeToggleSwitch';
import Logo from './Logo';
import { Link } from './uikit';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isOnTop, setIsOnTop] = useState(true);
  useEffect(() => {
    window.onscroll = () => { return (window.pageYOffset === 0 ? setIsOnTop(true) : setIsOnTop(false)); };
    return () => { window.onscroll = null; };
  });

  return (
    <header className={`${styles.header} ${!isOnTop && styles.headerNotOnTop}`}>
      <div className={`max-width--page ${styles.wrapper}`}>
        <div className="flex">
          <ColorThemeToggleSwitch />
        </div>
        <Link href="/" className={styles.logoWrapper}>
          <Logo />
        </Link>
        <nav className={`${styles.nav} ${isMobileMenuOpen && styles.navOpen}`}>
          <Link href="/surveys/" onClick={() => { setIsMobileMenuOpen(false); }}>گزارش‌ها</Link>
          <Link href="/posts" onClick={() => { setIsMobileMenuOpen(false); }}>مقاله‌ها</Link>
          <Link href="/books" onClick={() => { setIsMobileMenuOpen(false); }}>کتاب‌ها</Link>
          {/* <Link href="/books" onClick={() => { setIsMobileMenuOpen(false); }}>نظرسنجی‌ها</Link> */}
          <Link href="/tools" onClick={() => { setIsMobileMenuOpen(false); }}>ابزارها</Link>
        </nav>
        <div className="flex j-end">
          <HamburgerMenuButton
            onClick={() => { return setIsMobileMenuOpen((state) => { return !state; }); }}
            className={`${styles.hamburgerMenuButton} ${isMobileMenuOpen && styles.hamburgerMenuButtonOpen}`}
          />
        </div>
      </div>
    </header>
  );
};

const HamburgerMenuButton = ({ onClick, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      <span className="sr-only">منو وبسایت</span>
    </button>
  );
};

export default Header;

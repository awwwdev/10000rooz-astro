import Logo from './Logo';
import { Link } from './uikit';

const Footer = () => {
  return (
    <footer className=" cls-white padding--xl" style={{ backgroundColor: '#383838' }}>
      <div className="flex a-center column gap--xxl">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="layout:row-stack j-center gap--xl width--100 max-width:article clr:s">
          <Link href="/about">دربارهٔ ما</Link>
          <Link href="/contact">تماس با ما</Link>
          <Link href="/work-with-us">همکاری با ما</Link>
          <Link href="/support-us">حمایت از ما</Link>
          {/* <li>
            <Link href="/sponcers">حامیان و همراهان</Link>
          </li> */}
        </ul>
        <div className="flex a-center column clr:s">
          Copyright &copy; 2022  | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

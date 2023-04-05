import LogoSvg from '@/public/logos/10000rooz-logo-2.svg';
import styles from '@/styles/logo.module.scss';

const Logo = () => {
  return (
    <span className={styles.logoImage}>
      <LogoSvg className={styles.logoSvg} />
    </span>
  );
};

export default Logo;

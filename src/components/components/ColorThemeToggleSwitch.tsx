import { ColorThemeContext } from '@/components/ColorThemeProvider';
import { useContext } from 'react';
import { Icon } from '@/components/uikit';
import { Moon, Sun1 } from 'iconsax-react';
import styles from '@/styles/color-switch.module.scss';

const ColorThemeToggleSwitch = ({ className, ...otherProps }) => {
  const { colorTheme, toggleColorTheme } = useContext(ColorThemeContext);

  return (
    <button type="button" className={`${styles.button} ${className}`} onClick={toggleColorTheme} {...otherProps}>
      {colorTheme === 'dark-theme' ? <Icon icon={Sun1} variant="Bold" alt="enable light color theme" className={styles.svg} hasNoTextAfter /> : <Icon icon={Moon} variant="Bold" alt="enable dark color them " className={styles.svg} isMirrored hasNoTextAfter />}
    </button>
  );
};

export default ColorThemeToggleSwitch;

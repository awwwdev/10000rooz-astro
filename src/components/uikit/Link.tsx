import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type propsType = {
  children?: any;
  isNavLink?: boolean;
  className?: string;
  activeClassName?: string;
  href: string | undefined;
  isFullWidth?: boolean;
  [key: string]: any;
}

const DumboLink = ({ children }) => { return children; };

// eslint-disable-next-line react/display-name
const CustomLink = (
  {
    children,
    isNavLink = false,
    activeOnSubPaths = true,
    className = '',
    href,
    isEnabled = true,
    isFullWidth = false,
    ...otherProps
  }: propsType,
) => {
  let isActive = false;
  const { asPath } = useRouter();
  if (isNavLink) {
    if (activeOnSubPaths) {
      isActive = asPath.includes(href);
    } else {
      isActive = asPath === href;
    }
  }

  const LinkComponent = isEnabled ? Link : DumboLink;

  const passedClassName = isNavLink && isActive ? `${className} active-nav-link` : className;

  return (
    <LinkComponent href={href} passHref>
      <a className={passedClassName} {...otherProps}>
        {children}
      </a>
    </LinkComponent>
  );
};

export default CustomLink;

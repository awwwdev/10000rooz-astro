type propsType = {
  name?: string;
  icon: React.FC;
  alt: string;
  hasNoTextAfter?: boolean;
  isMirrored?: boolean;
  className?: string;
  style?: object;
  size?: string;
  color?: string;
  variant?: 'Linear' | 'Outline' | 'TwoTone' | 'Bulk' | 'Broken' | 'Bold';
  [key: string]: any;
};

const Icon = ({
  icon,
  alt,
  style,
  className,
  hasNoTextAfter = false,
  isMirrored,
  size,
  color,
  variant,
  ...otherProps
}: propsType) => {
  const IconComponent = icon;

  return (
    <span>
      <IconComponent
        size={size}
        color={color}
        variant={variant}
        className={`icon ${!hasNoTextAfter ? 'hasTextAfter' : ''} ${isMirrored ? 'mirrored' : ''} ${className}`}
        style={style}
        {...otherProps}
      />
    </span>
  );
};

export default Icon;

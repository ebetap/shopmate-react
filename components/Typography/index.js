import styles from './Typography.scss';

const Typography = (props) => {
  const { h1, h2, h3, h4, small, className, children, ...textProps } = props;

  const classNames = [
    styles.baseText,
    h1 && styles.h1Style,
    h2 && styles.h2Style,
    h3 && styles.h3Style,
    h4 && styles.h4Style,
    small && styles.bodySmall,
    ...className,
  ].join(' ');

  return (
    <p className={classNames} {...textProps}>
      {children}
    </p>
  );
};

Typography.defaultProps = {
  className: [],
};

export default Typography;

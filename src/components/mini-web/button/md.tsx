import React, { useState } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  title?: string;
  disableHover?: boolean;
  useStyle?: boolean;
}

const ButtonMD: React.FC<Props> = (props) => {
  const {
    children,
    backgroundColor,
    className = "",
    type = "button",
    title,
    disabled,
    onClick,
    disableHover = false,
    useStyle = false,
    ...rest
  } = props;

  const [isFocused, setFocus] = useState(false);

  const style = useStyle
    ? {
        background: disableHover
          ? backgroundColor
          : isFocused
          ? `linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.12) 100%), ${backgroundColor}`
          : backgroundColor,
      }
    : {};

  return (
    <button
      className={`moki-ui-dev dev-btn dev-btn-36 text-500-14 dev-border-8  ${className}`}
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      style={style}
      type={type}
      title={title}
      onClick={onClick}
      disabled={disabled}
      {...rest} // Spread the remaining props to the button
    >
      {children}
    </button>
  );
};

export default ButtonMD;

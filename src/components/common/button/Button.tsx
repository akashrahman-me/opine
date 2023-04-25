import React, {Fragment, ReactNode} from "react";
import sx from "./button.module.sass";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "contained" | "outlined";
  color?: "primary" | "dark-500";
  size?: "medium" | "small";
  leftIcon?: string;
  rightIcon?: string;
  children?: ReactNode;
  className?: string;
}

function Button(props: ButtonProps) {
  const {
    href,
    color = "primary",
    variant = "contained",
    leftIcon,
    rightIcon,
    children,
    className,
    size = "medium",
  } = props;

  const render = (
    <Fragment>
      {leftIcon && <img src={leftIcon} alt="" />}
      <span>{children}</span>
      {rightIcon && <img src={rightIcon} alt="" />}
    </Fragment>
  );

  const classes = `${sx[color]} ${sx[variant]} ${className} ${sx[size]} ${sx.wrapper}`;

  return href ? (
    <Link className={classes} href={href}>
      {render}
    </Link>
  ) : (
    <button className={classes} type="button">
      {render}
    </button>
  );
}

export default Button;

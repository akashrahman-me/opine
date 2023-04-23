import React, {Fragment, ReactNode} from "react";
import {Link, type To} from "react-router-dom";
import sx from "./button.module.css";

interface ButtonProps {
  to?: To;
  variant?: "contained" | "outlined";
  color?: "primary";
  size?: "medium";
  leftIcon?: string;
  rightIcon?: string;
  children?: ReactNode;
  className?: string;
}

function Button(props: ButtonProps) {
  const {
    to,
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

  const classes = `${sx[color]} ${sx[variant]} ${className}`;

  return to ? (
    <Link className={classes} to={to}>
      {render}
    </Link>
  ) : (
    <button className={classes} type="button">
      {render}
    </button>
  );
}

export default Button;

import React from "react";
import { Link, To } from "react-router-dom";

export interface FormButtonProps {
  text?: string;
  to?: To;
  className?: string;
  variant?: "contained" | "outline" | "";
  color?: string
  size?: "medium" | "small" | "large";
  onClick?: () => void;
  disabled?: boolean;
  btnText?: string;
  borderColor?:string;
  width?:string;
  padding?:string;
  height?:string;
  type?:string;
}

function  FormButton(props: FormButtonProps) {
  const { btnText, text, to, className, color, onClick,borderColor,width,padding,height,type, ...rest } =
    props;
  const renderContent = (
    <>
      {text && <span className={`${btnText || ""}`}>{text}</span>}
    
    </>
  );

  // Append className
  const attributes = {
    style: {
        borderColor: `${borderColor || ""}`,
        borderWidth: "1px",
        background: "transparent",
        width:`${width || "150"+"px"}`,
        height:`${height || "35"+"px"}`,
      
      
        
      },
    className: ` ${color || ""} ${padding || ""}  ${className || ""}  ${!text ? "only-icon-button" : ""} button`,
  };

  return to ? (
    <Link onClick={onClick} to={to} {...attributes}>
      {renderContent}
    </Link>
  ) : (
    <button onClick={onClick} {...rest} type="submit" {...attributes}  >
      {renderContent}
    </button>
  );
}
export default FormButton;

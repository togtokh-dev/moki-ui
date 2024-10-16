import React from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    backgroundColor?: string;
    className?: string;
    title?: string;
    disableHover?: boolean;
    useStyle?: boolean;
}
declare const ButtonSM: React.FC<Props>;
export default ButtonSM;

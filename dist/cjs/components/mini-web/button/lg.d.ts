import React from 'react';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    backgroundColor?: string;
    className?: string;
    title?: string;
    disableHover?: boolean;
    useStyle?: boolean;
}
declare const ButtonLG: React.FC<Props>;
export default ButtonLG;

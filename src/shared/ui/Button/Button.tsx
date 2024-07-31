import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton{
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton{
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { className, children, theme, square, size, ...otherProps } = props;

    const mods: Record<string, boolean> ={
        [cls.square]: square,
    }

    return (
        <button className={classNames(cls.button, mods, [className, cls[theme], cls[size]])}
        {...otherProps}>
            {children}
        </button>
 );
}
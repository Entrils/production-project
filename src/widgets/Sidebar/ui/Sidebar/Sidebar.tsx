import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () =>{
        setCollapsed( prev => !prev)
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Toogle</button>
            <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher />
            </div>
        </div>
 );
}
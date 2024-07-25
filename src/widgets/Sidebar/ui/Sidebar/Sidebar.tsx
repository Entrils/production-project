import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { Button } from 'shared/ui/Button/Button';

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
        <div 
            data-testid='sidebar'
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button 
                data-testid={"sidebar-toogle"} 
                onClick={onToggle}>
            toogle</Button>
            <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher />
            </div>
        </div>
 );
}
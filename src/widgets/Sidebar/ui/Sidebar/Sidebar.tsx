import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about_us.svg'
import MainIcon from 'shared/assets/icons/main.svg'

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);

    const {t} = useTranslation();

    const onToggle = () =>{
        setCollapsed( prev => !prev)
    }

    return (
        <div 
            data-testid='sidebar'
            className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button 
                data-testid={"sidebar-toogle"} 
                onClick={onToggle}
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={SizeButton.L}
                square>
                {collapsed ? ">": "<"}
            </Button>
            <div className={cls.items}>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
                    <MainIcon className={cls.icon}/>
                    <span  className={cls.link}> {t<string>("Главная")}</span>
                    </AppLink>
                    <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
                    <AboutIcon className={cls.icon} />
                    <span  className={cls.link}>{t<string>("О сайте")}</span>
                    </AppLink>
            </div>

            <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed}/>
            </div>
        </div>
 );
}
import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps{
    className?: string; 
}

export const Navbar = ({className}: NavbarProps) => {

  const {t} = useTranslation("translation");
  return (
    <div className={classNames(cls.navbar, {},[className])}>
        <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>{t<string>("Главная")}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t<string>("О сайте")}</AppLink>
        </div>
    </div>
  )
}

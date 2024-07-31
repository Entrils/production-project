import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'

interface NavbarProps{
    className?: string; 
}

export const Navbar = ({className}: NavbarProps) => {

  const {t} = useTranslation("translation");

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
      setIsAuthModal( (prev) => !prev);
  }, [])

  return (
    <div className={classNames(cls.navbar, {},[className])}>
        <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links}
        onClick={onToggleModal}>
          {t<string>('Войти')}
        </Button>
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil hic, vitae aut minima voluptatum porro a doloribus nesciunt dolore eveniet recusandae rerum. Eveniet aspernatur placeat quidem obcaecati optio perspiciatis!
        </Modal>
    </div>
  )
}

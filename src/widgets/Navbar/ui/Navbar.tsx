import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps{
    className?: string; 
}

export const Navbar = ({className}: NavbarProps) => {

  const {t} = useTranslation("translation");

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
      setIsAuthModal(false);
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
}, [])

  return (
    <div className={classNames(cls.navbar, {},[className])}>
        <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links}
        onClick={onShowModal}>
          {t<string>('Войти')}
        </Button>
        <LoginModal 
        isOpen={isAuthModal}
        onClose={onCloseModal}
        />
    </div>
  )
}

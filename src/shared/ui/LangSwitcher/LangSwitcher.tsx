import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const {t, i18n} = useTranslation();

    const toggle = () => {
      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }
    return (
            <Button className={classNames(cls.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR} 
            onClick={toggle}>
                {t<string>('Язык')}
                </Button>
 );
}
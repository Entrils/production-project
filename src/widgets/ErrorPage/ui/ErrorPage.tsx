import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation();

    const reloadPage = () =>{
        location.reload();
    }

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <p>{t<string>('Произошла ошибка')}</p>
            <Button onClick={reloadPage}>
                {t<string>('Обновить страницу')}
            </Button>
        </div>
 );
}
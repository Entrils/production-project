import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('translation');
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t<string>('Странница не найдена',{ns: 'translation'})}
        </div>
 );
}
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { className } = props;
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input 
            type="text"
            className={cls.input} 
            placeholder={t<string>('Введите логин')}
            />
            <Input 
            type="text" 
            className={cls.input} 
            placeholder={t<string>('Введите пароль')}
            />
            <Button className={cls.loginBtn}>
                {t<string>('Войти')}
            </Button>
        </div>
 );
}
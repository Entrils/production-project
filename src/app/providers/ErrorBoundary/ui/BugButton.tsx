import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
    const {t} = useTranslation();   
    const [error, setError] = useState(false);

    const toggleError =() =>{
        setError(true);
    }

    useEffect(()=>{
        if (error)
        throw new Error();
    },[error])

     return (
        <Button onClick={toggleError}>
            {t<string>('Выдать ошибку')}
        </Button>
 );
}
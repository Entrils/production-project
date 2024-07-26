import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
//@ts-ignore
export const RouterDecorator = (story: () => Story) =>  {
    return(
        <BrowserRouter>
        {/* @ts-ignore*/}
            {story()}
            
        </BrowserRouter>
    )
};
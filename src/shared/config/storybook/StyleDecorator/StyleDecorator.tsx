import { Story } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator = (story: () => Story) => {
    return (
        <div className="app light">
            {/* @ts-ignore*/}
            {story()}
        </div>
    )
    };
import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return (
        <div className={`app ${theme}`}>
            <ThemeProvider>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
            </ThemeProvider>
        </div>
    )
}
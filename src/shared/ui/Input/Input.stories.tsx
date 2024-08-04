import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Input} from './Input';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';


export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Type Text',
    value: '123123',
};



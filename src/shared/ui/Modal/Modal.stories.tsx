import { ComponentStory, Meta } from '@storybook/react';
import { Modal} from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil hic, vitae aut minima voluptatum porro a doloribus nesciunt dolore eveniet recusandae rerum. Eveniet aspernatur placeat quidem obcaecati optio perspiciatis!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nihil hic, vitae aut minima voluptatum porro a doloribus nesciunt dolore eveniet recusandae rerum. Eveniet aspernatur placeat quidem obcaecati optio perspiciatis!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {UnControlledRating, UnControlledRatingPropsType} from "./UnControlledRating";
import {action} from "@storybook/addon-actions";





// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'UnControlledRating',
    component: UnControlledRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 /*   argTypes: {
        backgroundColor: {control: 'color'},
    },*/
} /*as ComponentMeta<typeof Rating>;*/
const callback = action("rating changed inside component")


 export const EmptyStars = () => <UnControlledRating defaultValue={0} onChange={callback}/>
  export const Rating1 = () => <UnControlledRating defaultValue={1} onChange={callback}/>
  export const Rating2 = () => <UnControlledRating defaultValue={2} onChange={callback}/>
  export const Rating3 = () => <UnControlledRating defaultValue={3} onChange={callback}/>
  export const Rating4 = () => <UnControlledRating defaultValue={4} onChange={callback}/>
  export const Rating5 = () => <UnControlledRating defaultValue={5} onChange={callback}/>



/*
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
*/


import { Controls, Heading, Primary, Stories } from '@storybook/blocks';
import { Description, Subtitle, Title } from '@storybook/blocks';

import { Meta } from '@storybook/blocks';
import React from 'react';
import { Source } from '@storybook/blocks';

type Props = {
  specialMDX?: React.ReactElement;
};
export const CustomAutodocsTemplateOne: React.FC<Props> = ({ specialMDX }) => (
  <>
    <Meta />
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <Controls />
    {specialMDX}
    <Stories title="" includePrimary={false} />
    <Heading>Source Code</Heading>
    <Source language="tsx" dark />
  </>
);

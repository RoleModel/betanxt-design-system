import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'Components/ToggleButtonGroup',
  component: ToggleButtonGroup,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=11011-143217&t=njdQUyzVttt456w5-11',
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning', 'inherit'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    children: {
      control: 'text',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'ToggleButton',
    color: 'secondary',
    size: 'large',
  },
}

export default meta
type Story = StoryObj<typeof ToggleButtonGroup>

export const ToggleButtonGroupComponent: Story = {
  render: (args) => {
    const [view, setView] = React.useState('list');

    const handleChange = (_event: React.MouseEvent<HTMLElement>, nextView: string) => {
      setView(nextView);
    };

    return (
      <ToggleButtonGroup
        {...args}
        value={view}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="left" aria-label="left aligned">
          Left
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          Center
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          Right
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
}

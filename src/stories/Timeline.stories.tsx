import type { Meta, StoryObj } from '@storybook/react-vite'

import { Timeline } from '../components/Timeline'
import type { MuiTimelineItemData, TimelineProps } from '../components/Timeline'

const meta: Meta<TimelineProps> = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w1pqRAs10H0goKjxJl6HES/MUI-v6.1.0?node-id=11768-164405&t=nNrQpChNXPORG1Z5-4',
      examples: ['DefaultTimeline'],
    },
  },
  args: {
    // Default args for all stories, will be overridden by story-specific args
    title: 'Timeline of Events',
    position: 'right',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Optional title for the entire timeline.',
    },
    items: {
      control: 'object',
      description:
        'Array of timeline item data objects. See MuiTimelineItemData interface.',
    },
    position: {
      control: 'select',
      options: ['left', 'right', 'alternate', 'alternate-reverse'],
      description: 'The main positioning strategy for timeline items (from MUI).',
    },
  },
}

export default meta

type Story = StoryObj<TimelineProps>

const defaultItems: MuiTimelineItemData[] = [
  {
    id: '1',
    status: 'Received',
    description: 'The system will undergo scheduled maintenance.',
    time: '10:00 AM',
    eventColor: 'default',
    isCurrent: true,
  },
  {
    id: '2',
    status: 'In Production',
    description: 'New user John Doe has completed the onboarding process.',
    time: 'Yesterday',
    eventColor: 'default',
  },
  {
    id: '3',
    status: 'Pre-Production',
    description: 'Migration of legacy data to the new platform has commenced.',
    time: '10/29/25',
    eventColor: 'default',
  },
  {
    id: '4',
    status: 'Critical Alert Resolved',
    time: '10/28/25',
    eventColor: 'default',
  },
]

export const DefaultTimeline: Story = {
  name: 'Timeline',
  args: {
    items: defaultItems,
    position: 'right',
    title: 'Timeline of Events',
  },
  render: (args) => <Timeline {...args} />,
}

export const AlternateTimeline: Story = {
  name: 'Alternate Position Timeline',
  args: {
    items: defaultItems,
    position: 'alternate',
    title: 'Project Milestones (Alternate)',
  },
  render: (args) => <Timeline {...args} />,
}

import { Meta, StoryObj } from '@storybook/react/*'
import Chip from '.'

const meta: Meta<typeof Chip> = {
  title: 'components/Chip',
  component: Chip,
  args: {
    label: 'Label',
    variant: 'Filled',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

//devo fare stories per Filled and Outlined
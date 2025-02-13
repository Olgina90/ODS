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

export const Outlined: Story = {
  args: {
    label: 'Chip Outlined',
    variant: 'Outlined',
  },
}

export const Filled: Story = {
  args: {
    label: 'Chip Filled',
    variant: 'Filled',
  },
}
//devo fare stories per Filled and Outlined

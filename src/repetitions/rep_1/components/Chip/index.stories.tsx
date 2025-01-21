import { Meta, StoryObj } from '@storybook/react/*'
import Chip from '../../../../components/Chip'

const meta: Meta<typeof Chip> = {
  title: 'rep_1/components/Chip',
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
    label: 'Label Outlined',
    variant: 'Outlined',
  },
}

export const Filled: Story = {
  args: {
    label: 'Label Filled',
    variant: 'Filled',
  },
}

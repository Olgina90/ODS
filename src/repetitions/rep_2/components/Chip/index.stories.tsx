import { Meta, StoryObj } from '@storybook/react/*'
import Chip from '../../../../components/Chip'

const meta: Meta<typeof Chip> = {
  title: 'rep_2/components/Chip',
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
    variant: 'Outlined',
    label: 'Label Outlined',
  },
}

export const Filled: Story = {
  args: {
    variant: 'Filled',
    label: 'Label Filled',
  },
}

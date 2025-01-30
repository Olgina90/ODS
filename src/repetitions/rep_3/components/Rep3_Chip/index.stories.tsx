import { Meta, StoryObj } from '@storybook/react/*'
import Rep3_Chip from '../Rep3_Chip'

const meta: Meta<typeof Rep3_Chip> = {
  title: 'rep_3/components/Rep3_Chip',
  component: Rep3_Chip,
  args: {
    label: 'label',
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

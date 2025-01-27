import { Meta, StoryObj } from '@storybook/react/*'
import Rep2_Chip from '.'

const meta: Meta<typeof Rep2_Chip> = {
  title: 'rep_2/components/Rep2_Chip',
  component: Rep2_Chip,
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

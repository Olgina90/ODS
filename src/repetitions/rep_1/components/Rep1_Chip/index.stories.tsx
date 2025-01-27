import { Meta, StoryObj } from '@storybook/react/*'
import Rep1_Chip from '.'

const meta: Meta<typeof Rep1_Chip> = {
  title: 'rep_1/components/Rep1_Chip',
  component: Rep1_Chip,
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

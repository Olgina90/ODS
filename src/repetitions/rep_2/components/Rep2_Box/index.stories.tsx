import { Meta, StoryObj } from '@storybook/react/*'
import Rep2_Box from '../Rep2_Box'

const meta: Meta<typeof Rep2_Box> = {
  title: 'rep_2/components/Rep2_Box',
  component: Rep2_Box,
  args: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'sadfsdftd',
    margin: '30px',
    padding: '40px',
  },
}

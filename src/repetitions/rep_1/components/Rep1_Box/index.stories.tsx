import { Meta, StoryObj } from '@storybook/react/*'
import Rep1_Box from '../Rep1_Box'

const meta: Meta<typeof Rep1_Box> = {
  title: 'rep_1/components/Rep1_Box',
  component: Rep1_Box,
  args: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'sfhsdfhdf',
    margin: '30px',
    padding: '40px',
  },
}

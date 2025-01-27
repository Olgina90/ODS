import { Meta, StoryObj } from '@storybook/react/*'
import Box from '.'

const meta: Meta<typeof Box> = {
  title: 'components/Box',
  component: Box,
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

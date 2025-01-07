import { Meta, StoryObj } from '@storybook/react/*'
import Box from '.'

const meta: Meta<typeof Box> = {
  title: 'components/Box',
  component: Box,
  args: {
    padding: '20px',
    margin: '20px',
  },
}

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {}

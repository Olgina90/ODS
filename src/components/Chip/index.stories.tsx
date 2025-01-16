import { Meta, StoryObj } from '@storybook/react/*'
import Chip from '.'

const meta: Meta<typeof Chip> = {
  title: 'components/Chip',
  component: Chip,
  args: {
    backgroundColor: '#000',
    padding: '6px 12px',
    border: 'solid 1px grey',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

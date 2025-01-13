import { Meta, StoryObj } from '@storybook/react/*'
import Chip from '.'

const meta: Meta<typeof Chip> = {
  title: 'components/Chip',
  component: Chip,
  args: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

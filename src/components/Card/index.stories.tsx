import { Meta, StoryObj } from '@storybook/react/*'
import Card from '.'
import Box from '../Box'
import Image from '../Image'
import Text from '../Text'
import Chip from '../Chip'

const meta: Meta<typeof Card> = {
  title: 'components/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const UserCard: Story = {
  args: {
    children: (
      <Box margin="20px" padding="20px">
        <Image
          src="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="there is reptile"
        />
        <Text tag='b'><b>Olga</b> ha sbagliato</Text>
        <Chip label="chip label"></Chip>
      </Box>
    ),
  },
}

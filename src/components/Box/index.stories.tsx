import { Meta, StoryObj } from '@storybook/react/*'
import Box from '.'
import Chip from '../Chip'

const meta: Meta<typeof Box> = {
  title: 'components/Box',
  component: Box,
  args: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Box
        display={'inherit'}
        backgroundColor={'green'}
        margin={'30px'}
        padding={'40px'}
      >
        <Chip label={'olga'} variant={'Filled'}></Chip>
      </Box>
    ),
    display: 'inline-block',
    backgroundColor: 'orange',
  },
}

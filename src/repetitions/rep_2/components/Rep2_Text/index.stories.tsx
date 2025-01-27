import { composeStory, Meta, StoryObj } from '@storybook/react/*'
import Rep2_Text from '.'

const meta: Meta<typeof Rep2_Text> = {
  title: 'rep_2/components/Rep2_Text',
  component: Rep2_Text,
  args: {
    tag: 'span',
    color: '#000',
    fontSize: '16px',
    children: 'My text',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tag: 'b',
    children: 'The text should be bolt',
  },
}

export const CustomColor: Story = {
  args: {
    tag: 'p',
    color: '#06376d',
    children: 'The text is dark blue',
  },
}

export const LargeText: Story = {
  args: {
    tag: 'div',
    fontSize: '24px',
    children: 'The text is Large',
  },
}

export const Paragraph: Story = {
  args: {
    tag: 'p',
    color: '#000',
    children: (
      <Rep2_Text tag={'span'}>
        {'My name is '}
        <Rep2_Text tag={'b'}>{'Olga'}</Rep2_Text>
        {", and I'm "}
        <Rep2_Text tag={'b'}>{'34'}</Rep2_Text>
      </Rep2_Text>
    ),
  },
}

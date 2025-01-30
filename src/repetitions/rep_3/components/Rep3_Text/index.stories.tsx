import { Meta, StoryObj } from '@storybook/react/*'
import Rep3_Text from '.'

const meta: Meta<typeof Rep3_Text> = {
  title: 'rep_3/components/Rep3_Text',
  component: Rep3_Text,
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
      <Rep3_Text tag={'span'}>
        {'My name is '}
        <Rep3_Text tag={'b'}>{'Olga'}</Rep3_Text>
        {", and I'm "}
        <Rep3_Text tag={'b'}>{'34'}</Rep3_Text>
      </Rep3_Text>
    ),
  },
}

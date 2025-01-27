import { Meta, StoryObj } from '@storybook/react/*'
import Rep1_Text from '.'


const meta: Meta<typeof Rep1_Text> = {
  title: 'rep_1/components/Rep1_Text',
  component: Rep1_Text,
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
    color: '#007BFF',
    children: 'The text is blue',
  },
}

export const LargeText: Story = {
  args: {
    tag: 'div',
    fontSize: '24px',
    children: 'The text is large',
  },
}

export const Paragraph: Story = {
  args: {
    tag: 'p',
    color: '#000',
    children: (
      <Rep1_Text tag={'span'}>
        {'My name is '}
        <Rep1_Text tag={'b'}>{'Olga'}</Rep1_Text>
        {", and I'm"} <Rep1_Text tag={'b'}>{'34'}</Rep1_Text>
      </Rep1_Text>
    ),
  },
}

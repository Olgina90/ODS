import { Meta, StoryObj } from '@storybook/react/*'
import Text from '.'

const meta: Meta<typeof Text> = {
  title: 'component/Text',
  component: Text,
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
    children: 'the text should be bold',
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
      <Text tag={'span'}>
        {'My name is'} <Text tag={'b'}>{'Olga'}</Text>
        {", and I'm"} <Text tag={'b'}>{'34'}</Text>
      </Text>
    ),
  },
}

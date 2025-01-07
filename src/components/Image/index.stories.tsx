import { Meta, StoryObj } from '@storybook/react'
import Image from '.'

const meta: Meta<typeof Image> = {
  title: 'components/Image',
  component: Image,
  args: {
    src: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    alt: 'Immagine',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://mui.com/static/images/avatar/1.jpg',
    alt: 'Immagine default',
  },
}

import { Meta, StoryObj } from "@storybook/react";
import Image from ".";

const meta: Meta<typeof Image> = {
    title: 'Image',
    component: Image
}

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
}
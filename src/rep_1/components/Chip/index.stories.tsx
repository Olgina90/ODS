import { Meta, StoryObj } from "@storybook/react/*";
import Chip from "../../../components/Chip";

const meta: Meta<typeof Chip> = {
    title: 'rep_1/components/Chip',
    component: Chip,
    args: {

    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {}
}

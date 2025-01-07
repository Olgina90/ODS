import { BoxWrapper } from "./styled"

type ImageProps = {
  src: string
  alt: string
}

export default function Image({ src, alt }: ImageProps) {
  return <BoxWrapper src={src} alt={alt} />
}

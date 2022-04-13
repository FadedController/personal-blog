import React from 'react'
import { Text } from '@mantine/core'
import NextImage from 'next/image'

const Image: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <div className="block">
      <figure className="grid gap-y-2">
        <div className="relative aspect-video">
          <NextImage
            alt={alt}
            src={src}
            className="absolute object-cover"
            layout="fill"
          ></NextImage>
        </div>

        <figcaption>
          <Text color="dimmed">{alt}</Text>
        </figcaption>
      </figure>
    </div>
  )
}

export default Image

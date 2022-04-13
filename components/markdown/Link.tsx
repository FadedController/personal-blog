import { Text } from '@mantine/core'
import { NextLink } from '@mantine/next'
import React from 'react'

const Link: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <NextLink href={href}>
      <Text variant="link" className="hover:cursor-pointer" component="span">
        {children}
      </Text>
    </NextLink>
  )
}

export default Link

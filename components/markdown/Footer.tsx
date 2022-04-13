import { Mark, Title } from '@mantine/core'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Reference: React.FC<{ id: string }> = ({ children, id }) => {
  const router = useRouter()
  const route = router.asPath
  const [isIdOnRoute, setIsIdOnRoute] = useState(route.includes(`${id}`))

  useEffect(() => {
    const newValue = route.includes(`${id}`)
    setIsIdOnRoute(newValue)

    if (newValue) {
      setTimeout(() => {
        setIsIdOnRoute(false)
      }, 5000)
    }

    setIsIdOnRoute(route.includes(`${id}`))
  }, [route])

  return (
    <div>
      {isIdOnRoute ? (
        <Mark id={id}>{children}</Mark>
      ) : (
        <div id={id}>{children}</div>
      )}
    </div>
  )
}

const Footer: React.FC = ({ children }) => {
  const [referencesArr, setReferencesArr] = useState<JSX.Element[]>([])

  useEffect(() => {
    const childrenArr = React.Children.toArray(children)
    const references: JSX.Element[] = childrenArr.map((c) => {
      const child = c as React.ReactElement
      const { id, children } = child.props
      return (
        <Reference id={id} key={`__$${id}$__`}>
          {children}
        </Reference>
      )
    })

    setReferencesArr(references)
  }, [])

  return (
    <footer className="grid gap-y-4 px-6 py-4">
      <Title order={2}>Referencias</Title>
      <div className="grid gap-y-2">{referencesArr}</div>
    </footer>
  )
}

export default Footer

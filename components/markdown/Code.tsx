import { Prism } from '@mantine/prism'
import React from 'react'

const Code: React.FC<{ className: string }> = ({ children, className }) => {
  return (
    <div className="max-w-[85vw] overflow-scroll">
      <Prism
        scrollAreaComponent={'div'}
        language={className?.replace('lang-', '') as any}
      >
        {children?.toString() ?? ''}
      </Prism>
    </div>
  )
}

export default Code

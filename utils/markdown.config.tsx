import { Blockquote, List, Mark, Table, Title, Text } from '@mantine/core'
import { MarkdownToJSX } from 'markdown-to-jsx'
import { Code, Footer, Link, Wrapper, Image } from '../components/markdown'

export const markdownOptions: MarkdownToJSX.Options = {
  wrapper: Wrapper,
  overrides: {
    code: { component: Code },
    ol: { component: List, props: { listStyleType: 'decimal' } },
    ul: { component: List, props: { listStyleType: 'disc' } },
    strong: { component: Text, props: { weight: 700 } },
    h1: { component: Title, props: { order: 1 } },
    h2: { component: Title, props: { order: 2 } },
    h3: { component: Title, props: { order: 3 } },
    h4: { component: Title, props: { order: 4 } },
    h5: { component: Title, props: { order: 5 } },
    h6: { component: Title, props: { order: 6 } },
    p: { component: Text, props: { size: 'md' } },
    blockquote: { component: Blockquote },
    li: { component: List.Item },
    table: { component: Table, props: { highlightOnHover: true } },
    mark: { component: Mark },
    a: { component: Link },
    footer: { component: Footer },
    img: { component: Image },
  },
}

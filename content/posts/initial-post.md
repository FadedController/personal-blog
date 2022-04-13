---
title: Hello! Welcome to my blog!
slug: initial-post
author: Axel Padilla <technicallyshould@parsethis.out>
image: /assets/hero-1.jpg
altImage: I like to write a little bit.
---

# Hello! Welcome to my blog!

I know this is going to be a really simple post, but I need to start writing! I am going to be running some tests, to make sure everything works as I would expect.

Now I would like to add a blockquote.[^1]

[^1]: This is a blockquote.

> "This is a blockquote.
> And this is another line of the blockquote."
>
> _Axel Padilla (2020)_

Let's see how code renders <mark>now</mark> Here is a simple _footnote_[^2].

[^2]: This is a footnote.

```bash
curl https://google.com
```

![This is a beautiful cat](/assets/cat.jpg)

1. Item 1
2. Item 2

```tsx
import { Prism } from '@mantine/prism'

const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>
}
```

[Take me home](/)

Table of conversions

| From | To  | Something |
| ---- | --- | --------- |
| 1    | 2   | 3         |
| 1    | 2   | 3         |
| 1    | 2   | 3         |

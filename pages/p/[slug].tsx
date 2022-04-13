import { readdir, readFile } from 'fs/promises'
import Markdown from 'markdown-to-jsx'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import parseMD from 'parse-md'
import NextImage from 'next/image'
import { markdownOptions } from '../../utils/markdown.config'

interface Post {
  title: string
  slug: string
  author: string
  image: string
  content: string
  altImage: string
}

interface PostPageProps {
  post: Post
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const { title, author, image, content, altImage } = post

  return (
    <div className="flex w-full justify-center">
      <div className="max-w-4xl">
        <Head>
          <title>{title}</title>
        </Head>
        <div>
          <div className="relative mb-4 aspect-video">
            <NextImage
              className="absolute object-cover"
              layout="fill"
              src={image}
              alt={altImage}
            ></NextImage>
          </div>

          <Markdown options={markdownOptions}>{content}</Markdown>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string | undefined

  // Get contents from markdown file
  const fileContent = await readFile(`content/posts/${slug}.md`, 'utf8')

  // Parse markdown
  const { content, metadata } = parseMD(fileContent) as {
    content: string
    metadata: { [key: string]: string } | undefined
  }

  // Format data
  const post: Post = {
    title: metadata?.title ?? '',
    // This regex removes email data from author
    // e.g. "Axel Padilla <test@gmail.com>" --> "Axel Padilla"
    author: metadata?.author.replace(/ <(?:.)+>/g, '') ?? '',
    slug: metadata?.slug ?? '',
    image: metadata?.image ?? '',
    altImage: metadata?.altImage ?? '',
    content,
  }

  return { props: { post } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Return all the files in the content/posts directory
  const paths = (await readdir('content/posts')).map((f) => {
    return { params: { slug: f.replace('.md', '') } }
  })

  return { paths, fallback: false }
}

export default PostPage

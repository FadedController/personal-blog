import { NextPage } from 'next'
import Head from 'next/head'

interface AdminPageProps {}

const AdminPage: NextPage<AdminPageProps> = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Content Manager</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <link
          href="admin/config.yml"
          type="text/yaml"
          rel="cms-config-url"
        ></link>
      </Head>
      <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
    </>
  )
}

export default AdminPage

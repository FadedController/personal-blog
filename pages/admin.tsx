import { NextPage } from 'next'
import Head from 'next/head'

interface AdminPageProps {}

const AdminPage: NextPage<AdminPageProps> = () => {
  return (
    <>
      <Head>
        <link href="admin/config.yml" type="text/yaml" rel="cms-config-url" />
        <title>Content Manager</title>
        <script
          defer
          src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"
        ></script>
      </Head>
    </>
  )
}

export default AdminPage

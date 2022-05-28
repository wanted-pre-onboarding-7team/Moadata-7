import { Helmet, HelmetProvider } from 'react-helmet-async'

interface titleType {
  title: string
}

const SEO = ({ title }: titleType) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  )
}

export default SEO

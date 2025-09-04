import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Henry's homepage" />
        <meta name="author" content="Henry Grant" />
        <meta name="author" content="QloYz" />
        <link rel="apple-touch-icon" href="apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Henry Grant" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@qloyz" />
        <meta name="twitter:creator" content="@qloyz" />
        <meta property="og:site_name" content="Henry Grant" />
        <meta name="og:title" content="Henry Grant" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://qloyz-homepage.vercel.app/card.png" />
        <title>Henry Grant - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main

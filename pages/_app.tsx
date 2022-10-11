import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { theme } from '../theme'
import { DefaultSeo } from 'next-seo'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Sonr Learn Program</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        /> */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/ReadMe.png`,
          site_name: 'Sonr Learn Program',
          title: 'Sonr Learn Program',
          description:
            'Sonr Learn is an open-source learning platform created by the Sonr Developer Community.',
          images: [
            {
              url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/ReadMe.png`,
              alt: 'Sonr Learn Program',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@sonr_learn',
          site: '@sonr_learn',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon/favicon.ico',
          },
        ]}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )

}

export default MyApp

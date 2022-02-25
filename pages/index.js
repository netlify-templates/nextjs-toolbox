import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ContactForm from '@components/FeedbackForm'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <p className="description">
          Here's an example of a Netlify Form! When you fill this out, the submissions can be found in the Netlify Admin site.
        </p>
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

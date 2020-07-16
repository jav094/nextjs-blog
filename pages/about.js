import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { render } from 'react-dom'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title> About + {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <About/>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export function About() {
  return(
      <div>
        <p>
        I make things that work with you. My approach to design is compassionate and often minimalistic, because user research and testing are a core part of my process. I also advocate for diversity and inclusion wherever I can.

        I started out as a developer working on mobile apps and game UIs. I helped make Forza Motorsport 6 and Forza Motorsport 6: Apex, and polished up Windows Phone's apps and OS. Over the years I met some incredibly talented & immensely supportive designers who inspired me to start my own design career.
        ‍‍
        In 2016 I started a little design agency—Coastal—and began doing freelance product and graphic design. In the meantime I pursued my Master's in Health Informatics at the University of Washington, and thereafter tailored my design services to healthcare startups.
        ‍
        After stints at Microsoft, Amazon, and REI, I've learned to love multidisciplinary teams and difficult challenges. If you're interested in working together, drop me a line.          
        </p>
      </div>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

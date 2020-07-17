import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
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
    <>
    <h2 className="text-center my-24 text-2xl">Making simple, helpful things</h2>

    <section className="flex mb-12">
      <div className="bg-red w-1/3 mr-10">
        <img className="" src="/assets/juan.jpg" alt="Photo of Juan Valera"/>
      </div>
      
      <p className="w-2/3">
        I make things that work with you. My approach to design is compassionate and often minimalistic, because user research and testing are a core part of my process. I also advocate for diversity and inclusion wherever I can.
        
        <br/><br/>
        
        I started out as a developer working on mobile apps and game UIs. I helped make{" "}
        <a href="https://forzamotorsport.net/en-US/games/fm6" className="underline">Forza Motorsport 6</a>
        {" "}and{" "}
         <a href="https://forzamotorsport.net/en-US/games/fm6a" className="underline">Forza Motorsport 6: Apex</a>, and polished up{" "} 
        <a className="underline" href="https://en.wikipedia.org/wiki/Windows_Phone">Windows Phone</a>'s apps and OS. Over the years I met some incredibly talented & immensely supportive designers who inspired me to start my own design career.
        ‍‍
        <br/><br/>

        In 2016 I started a little design agency to pursue freelance design. At the same time, I worked towards my Master's in{" "}
         <a className="underline" href="https://www.health-informatics.uw.edu/">Health Informatics</a> at the University of Washington. With my newfound experience in the healthcare industry, I began tailoring design services to healthcare companies and startups.
        ‍
        <br/><br/>

        After stints at Microsoft, Amazon, and REI, I've learned to love multidisciplinary teams and difficult challenges. If you're interested in working together, <a className="underline" href="mailto:jav094@gmail.com">drop me a line.</a>
        </p>      
    </section>

      <div>
        
      </div>
      </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}

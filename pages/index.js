import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts }) {
  let heroPost = null
  let morePosts = Array()

  // Separate hero post and more posts using frontmatter
  {allPosts.map((value, index) => {
    if (value.heroPost === true) {
      heroPost = allPosts[index]
    }
    else {
      morePosts.push(value)
    }
  })}

  return (
    <>
      <Layout>
        <Head>
          <title>Juan Valera - Product Designer</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
    'heroPost',
    'underNDA'    
  ])

  return {
    props: { allPosts },
  }
}
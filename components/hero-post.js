import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
    <section>
      <div className="mb-8">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-40">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
        </div>
        <div>

        {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>
            <p className="text-lg leading-relaxed md:mt-2 lg:mt-4">{excerpt}</p>
          </a>
        </Link>
      ) : (
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      )}          
          
        </div>
      </div>
    </section>
  )
}

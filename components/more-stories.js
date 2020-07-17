import PostPreview from '../components/post-preview'
import NDAPostPreview from '../components/nda-post-preview'

export default function MoreStories({ posts }) {  
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More case studies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
            <MaybeNdaPreview 
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              slug={post.slug}
              excerpt={post.excerpt}
              underNDA={post.underNDA}
            />
        ))}
      </div>
    </section>
  )
}

export function MaybeNdaPreview( props ) {
  if (props.underNDA === true) {
    return (
      <NDAPostPreview 
        key={props.slug}
        title={props.title}
        coverImage={props.coverImage}
        slug={props.slug}
        excerpt={props.excerpt}
      />
    )
  }
  else {
    return(
      <PostPreview 
        key={props.slug}
        title={props.title}
        coverImage={props.coverImage}
        slug={props.slug}
        excerpt={props.excerpt}
      />
    )
  }
}
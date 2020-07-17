import { StaticCoverImage } from './cover-image'


export default function NDAPostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <StaticCoverImage
          title={title}
          src={coverImage}
          slug={slug}
        />
      </div>

      <h3 className="text-3xl mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

import Link from 'next/link'

export default function Intro() {
  return (
    <section className=" flex-col flex items-center justify-between my-12 md:flex-row md:mt-16 md:mb-12">

      <Link as={`/`} href="/">
        <a aria-label="Home">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight sm:pr-4">
        Juan&nbsp;Valera
      </h1>
        </a>
      </Link>

      <section className="self-center md:self-end mb-1 md:mb-4">
        <h4 className="text-right text-lg">
          Product designer
        </h4>
      </section>
    </section>
  )
}

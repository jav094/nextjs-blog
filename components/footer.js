import Container from './container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="py-28 flex flex-row justify-center">
          <Link as={`/about`} href="/about">
            <a className="underline pr-5" aria-label="About">About</a>
          </Link>

          <a className="underline pr-5" href="https://twitter.com/justcallmejuan">Twitter</a>
          <a className="underline pr-5" href="https://www.instagram.com/juan_v2.1_final_copy.psd/">Instagram</a>
          <a className="underline pr-5" href="https://medium.com/@justcallmejuan">Medium</a>
          <a className="underline pr-5" href="/assets/JuanValera-CV.pdf" download>Resumé</a>
          <a className="underline pr-5" href="mailto:jav094@gmail.com">Hire</a>
{/* 
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`#`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div> */}
        </div>
      </Container>
    </footer>
  )
}

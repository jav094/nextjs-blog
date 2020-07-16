import { CMS_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className=" flex-col md:flex-row flex items-center justify-between mt-16 mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight sm:pr-4">
        Juan&nbsp;Valera
      </h1>
      <section className="self-center md:self-end mb-1 md:mb-4">
        <h4 className="text-right text-lg">
          Product designer
        </h4>
      </section>
    </section>
  )
}

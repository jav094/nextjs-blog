import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <Container>
      <div className="py-2 text-center text-md">
        {preview ? (
          <>
            This is page is a preview.{' '}
            <a
              href="/api/exit-preview"
              className="underline hover:text-cyan duration-200 transition-colors"
            >
              Click here
            </a>{' '}
            to exit preview mode.
          </>
        ) : (
          <>
            Black Lives Matter.{' '}
            <a
              href={`https://time.com/5849721/how-to-help-black-lives-matter-protests/`}
              className="underline hover:text-success duration-200 transition-colors">
                Here's how you can help
            </a>
          </>
        )}
      </div>
    </Container>
  )
}

import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children, extra = true }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
        {extra && (
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            To see older projects, check out version 1 of my portfolio website.
          </p>
        )}
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}

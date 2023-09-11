import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/ayo.jpeg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
  type,
  rel,
  target,
}) {
  return (
    <>
      {!type && (
        <li className={clsx(className, 'flex')}>
          <Link
            href={href}
            className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
          >
            <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
            <span className="ml-4">{children}</span>
          </Link>
        </li>
      )}
      {type === 'external' && (
        <li className={clsx(className, 'flex')}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={href}
            className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
          >
            <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
            <span className="ml-4">{children}</span>
          </a>
        </li>
      )}
    </>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Ayo Adesanya | Full-stack Developer, People Lover & Team Builder "
        description="I’m Ayo, a full-stack developer, people lover and team builder when I have the time. I work across the stack but primally work on the front-end at WP Tech (Sweden), building internal integration systems."
        canonical="https://www.ayoadesanya.com/"
        openGraph={{
          url: 'https://www.ayoadesanya.com/',
          title:
            'Ayo Adesanya - Full-stack Developer, People Lover & Team Builder',
          description:
            'I’m Ayo, a full-stack developer, people lover and team builder when I have the time. I work across the stack but primally work on the front-end at WP Tech (Sweden), building internal integration systems.',
          images: [
            {
              url: '/social-image.png',
              width: 800,
              height: 600,
              alt: 'Ayo Adesanya - Full-stack Developer, People Lover & Team Builder',
              type: 'image/jpeg',
            },
            {
              url: '/social-image.png',
              width: 900,
              height: 800,
              alt: 'Ayo Adesanya - Full-stack Developer, People Lover & Team Builder',
              type: 'image/jpeg',
            },
            { url: '/social-image.png' },
            { url: '/social-image.png' },
          ],
          siteName:
            'Ayo Adesanya - Full-stack Developer, People Lover & Team Builder ',
        }}
        twitter={{
          handle: '@ayo_imagines',
          site: '@ayo_imagines',
          cardType: 'summary_large_image',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Ayo Adesanya. I live in Sweden, where I help automate internal
              business processes.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I work across the stack but primally work on the front-end at WP
                Tech (Sweden), leading the front-end development of our
                cross-platform applications while contributing to the building,
                digitalization and automation of our internal work-flows.
              </p>
              <p>
                <span className="font-bold">Interests:</span> tech
                digitalization, system integrations, sustainability, love and
                relationships and Japanese anime. I thrive in teams, helping
                others grow and building culture that fosters genuine
                collaboration and connection.
              </p>

              <p>
                <span className="font-bold">My Keywords:</span>{' '}
                #collectiveAccountability #climateJustice #socialJustice
                #techforgood
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink
                href="https://github.com/AyoCodess"
                type={'external'}
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/ayoadesanya/"
                type={'external'}
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:ayo@ayoadesanya.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                ayo@ayoadesanya.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

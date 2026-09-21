import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { WorkDetailPage } from '@/components/pages/work-detail'
import { ui } from '@/content/ui'
import { findWork, works } from '@/content/works'
import { pageMetadata } from '@/lib/metadata'

type Params = { readonly slug: string }

/** 静的エクスポートなので、出す URL はここで全部決める */
export function generateStaticParams(): Params[] {
  return works.map((work) => ({ slug: work.slug }))
}

export async function generateMetadata({
  params,
}: {
  readonly params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const work = findWork(slug)
  if (work === undefined) return { title: ui.notFoundTitle.en }
  return pageMetadata({
    locale: 'en',
    path: `/work/${work.slug}`,
    title: work.name,
    description: work.summary.en,
  })
}

export default async function Page({ params }: { readonly params: Promise<Params> }) {
  const { slug } = await params
  const work = findWork(slug)
  if (work === undefined) notFound()
  return <WorkDetailPage work={work} locale="en" />
}

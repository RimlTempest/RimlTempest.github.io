import { WorkListPage } from '@/components/pages/work-list'
import { ui } from '@/content/ui'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  locale: 'en',
  path: '/work',
  title: ui.worksTitle.en,
  description: ui.workMeta.en,
})

export default function Page() {
  return <WorkListPage locale="en" />
}

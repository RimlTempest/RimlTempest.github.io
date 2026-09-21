import { AboutPage } from '@/components/pages/about'
import { ui } from '@/content/ui'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  locale: 'en',
  path: '/about',
  title: ui.aboutTitle.en,
  description: ui.aboutMeta.en,
})

export default function Page() {
  return <AboutPage locale="en" />
}

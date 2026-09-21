import { ContactPage } from '@/components/pages/contact'
import { ui } from '@/content/ui'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  locale: 'en',
  path: '/contact',
  title: ui.contactTitle.en,
  description: ui.contactMeta.en,
})

export default function Page() {
  return <ContactPage locale="en" />
}

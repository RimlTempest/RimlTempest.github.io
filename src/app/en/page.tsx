import { HomePage } from '@/components/pages/home'
import { siteDescription } from '@/content/site'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  locale: 'en',
  path: '',
  description: siteDescription.en,
})

export default function Page() {
  return <HomePage locale="en" />
}

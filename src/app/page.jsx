import './index.css'
import { ClientOnly } from './components/client'
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function Page() {
  return <ClientOnly />
}

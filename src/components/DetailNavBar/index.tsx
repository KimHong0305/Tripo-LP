import { detailNavItems } from '@/constants/common'

const DetailNavBar = () => {
  return (
    <nav className="flex items-center gap-6.5">
      {detailNavItems.map(({ label, href }) => (
        <div key={href}>
          <a href={href}>{label}</a>
        </div>
      ))}
    </nav>
  )
}

export default DetailNavBar

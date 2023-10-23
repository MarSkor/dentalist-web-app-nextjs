import React from 'react'
import Link from 'next/link'

const BreadcrumbItem = ({ children, href, isCurrent, ...props }) => {
    return (
      <li {...props} className='breadcrumb__list--list-item'>
        <Link href={href}>
          <span
            className={isCurrent ? "breadcrumb-state-active" : "breadcrumb-state-not_active"}
            aria-current={isCurrent ? "page" : "false"}
          >
            {children}
          </span>
        </Link>
      </li>
      );
}

export default BreadcrumbItem
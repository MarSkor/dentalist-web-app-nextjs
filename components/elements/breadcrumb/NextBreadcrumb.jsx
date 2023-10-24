"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "@/components/elements";

const NextBreadcrumb = () => {
    const router = usePathname();
    const [breadcrumbs, setBreadcrumbs] = useState();

    // below is code from https://blog.anishde.dev/making-an-accessible-breadcrumb-navigation-using-tailwindcss-and-nextjs
    // with adjustments 
    useEffect(() => {
      const pathWithoutQuery = router.split("?")[0];
      let pathArray = pathWithoutQuery.split("/");
        
      pathArray.shift();

      pathArray = pathArray.filter((path) => path !== "");

      const breadcrumbs = pathArray.map((path, index) => {
        const href = "/" + pathArray.slice(0, index + 1).join("/");
        
        // removing the "-" from the path that comes from the mdx files
        const newLabel = path.replace(/-/g, " ");

        return {
          href,
          label: newLabel.charAt(0).toUpperCase() + newLabel.slice(1),
          isCurrent: index === pathArray.length - 1,
        };
      });
      setBreadcrumbs(breadcrumbs);
  }, [router]);
  
  return (
  <Breadcrumb>
    {breadcrumbs &&
      breadcrumbs.map((breadcrumb) => (
      <BreadcrumbItem
      key={breadcrumb.href}
      href={breadcrumb.href}
      isCurrent={breadcrumb.isCurrent}
      >
        {breadcrumb.label}
      </BreadcrumbItem>
    ))}
  </Breadcrumb>
  );
}

export default NextBreadcrumb;
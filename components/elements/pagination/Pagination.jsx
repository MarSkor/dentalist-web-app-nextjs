const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);

  if(pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log("pages", pages)


  return (
    <div>
     <ul className="pagination">
       {pages.map((page) => (
         <li
           key={page}
           className={
             page === currentPage ? "pageItemActive" : "pageItem"
           }
         >
           <a className="pageLink" onClick={() => onPageChange(page)}>
             {page}
           </a>
         </li>
       ))}
     </ul>
   </div>
  )
}

export default Pagination
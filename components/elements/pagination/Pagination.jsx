"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePagination, DOTS } from '@/hooks/usePagination';
import { NavArrowRight, NavArrowLeft } from 'iconoir-react';


const Pagination = props => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 970);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 970);
  };

  useEffect(() => {
    if(typeof window !== 'undefined'){
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    }
  });


  const {
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="pagination-wrapper">
      {isDesktop ? (
      <>
        <li className={`pagination-item ${currentPage === 1 ? "pagination-itemDisabled" : ""}`}>
          <Link className='pagination-item-link' href={`/blog?page=${currentPage - 1}`} scroll={false}>
            <NavArrowLeft/>
          </Link>
        </li>

        {paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return <li key={pageNumber} className="pagination-dots">&#8230;</li>;
          }

          return (
            <li
            key={pageNumber}
            className={`pagination-item ${pageNumber === currentPage ? "pagination-itemActive" : ""}`}
            >
              <Link className='pagination-item-link' href={`/blog?page=${pageNumber}`} scroll={false}>
                {pageNumber}
              </Link>
            </li>
          );
        })}
      
        <li className={`pagination-item ${currentPage === lastPage ? "pagination-itemDisabled" : ""}`}>
          <Link className='pagination-item-link' href={`/blog?page=${currentPage + 1}`} scroll={false}>
            <NavArrowRight/>
          </Link>
        </li>
      </>

      ) : (
        <div className='pagination-mobile'>
          <Link 
          className={`pagination-item ${currentPage === 1 ? "pagination-itemDisabled" : ""}`}
          href={currentPage > 2 ? `/blog?page=${currentPage - 1}` : "/blog"} 
          scroll={false}
          >
            <NavArrowLeft/>
          </Link>

          <div className="pagination-mobile__page-field">
            <p>{currentPage}</p>
            <p>of</p>
            <p>{lastPage}</p>
          </div>

          <Link 
          className={`pagination-item ${currentPage === lastPage ? "pagination-itemDisabled" : ""}`} 
          href={`/blog?page=${currentPage + 1}`} 
          scroll={false}
          >
            <NavArrowRight/>
          </Link>
        </div>
      )}

    </ul>
  );
};

export default Pagination;
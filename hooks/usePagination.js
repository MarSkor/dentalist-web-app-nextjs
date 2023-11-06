import { useMemo } from "react";

// help/code from https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
// and https://blog.logrocket.com/add-pagination-next-js-app/


export const DOTS = '...';

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount/pageSize);

    const totalPageNumbers = siblingCount + 5;

    if(totalPageNumbers >= totalPageCount){
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)


    // not showing the dots if there's only one position left before/after the left/right page count
    const leftDots = leftSiblingIndex > 2;
    const rightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPage = 1;
    const lastPage = totalPageCount;

    if(!leftDots && rightDots){
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount]
    }

    if(leftDots && !rightDots){
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)
      return [firstPage, DOTS, ...rightRange]
    }

    if(leftDots && rightDots){
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPage, DOTS, ...middleRange, DOTS, lastPage]
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
}
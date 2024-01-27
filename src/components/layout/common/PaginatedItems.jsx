import React, { useEffect, useState } from "react";
import { UniqueReserve } from "../private/UniqueReserve";
import ReactPaginate from "react-paginate";
import { getReservationByPagesMiddleware } from "../../../features/UniqueReserve/uniqueReserveSlice";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const PaginatedItems = ({ itemsPerPage }) => {
  
  const dispatch = useDispatch();
  const reservations = useSelector(
    (state) => state.reservation.reservations
  );
  const { totalElements } = useSelector(
    (state) => state.reservation.reservations
  );

  const userId = useSelector(state => state?.auth?.userLogin?.userData?.idUser) || JSON.parse(localStorage.getItem("user"))?.userData?.idUser;

  const items = reservations.content ? reservations.content :[];

  const [itemOffset, setItemOffset] = useState(0);

  const currentItems = items.slice(0, 1);
  const pageCount = Math.ceil(totalElements / itemsPerPage);
  
  const handlePageClick = (e) => {
    setItemOffset(e.selected + 1 );
  };

  useEffect(() => {
        dispatch(getReservationByPagesMiddleware(itemOffset, userId));
  }, [itemOffset]);

  return (
    <>
      <UniqueReserve currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        activeClassName="isActive"
      />
    </>
  );
};

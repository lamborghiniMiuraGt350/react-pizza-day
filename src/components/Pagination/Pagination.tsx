import React from 'react';
import ReactPaginate from 'react-paginate';

// import './pagination.scss'
import styles from './pagination.module.scss';


type PaginationProps = {
    currentPage: number;
    onChangePage: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => (
    <ReactPaginate
        className={styles.pagination}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={6}
        pageCount={3}
        forcePage={currentPage - 1}
    />
);
// import './pagination.scss'
import ReactPaginate from 'react-paginate';


import styles from './pagination.module.scss';

export const Pagination = ({ currentPage, onChangePage }) => (
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
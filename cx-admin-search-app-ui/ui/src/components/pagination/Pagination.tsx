import React from 'react';

import cx from 'classnames';

import { ChevronLeft, ChevronRight } from '../icons/Icons';

export type PaginationProps = {
    totalAmount: number;
    currentPage: number;
    pageSize: number;
}

const Pagination = ({currentPage, pageSize, totalAmount}: PaginationProps) => {

    const handleClick = (event: React.SyntheticEvent) => {
        event.preventDefault();
        alert('go to some page');
    }

    const pagesCount = totalAmount / pageSize + 1 < 5 ? totalAmount / pageSize + 1 : 5;

    const generatePagesButtons = () => {
        const pages = [];
        for ( let i = 1; i < pagesCount; i++ ) {
            pages.push(
                <a href="#"
                   onClick={handleClick}
                   className={
                       cx(
                           'w-10 h-10 rounded-md flex justify-center items-center hover:bg-primary-800 hover:text-white',
                           i === currentPage && 'bg-primary-500 text-white hover:bg-primary-800'
                       )}
                >
                    { i }
                </a>)
        }
        return pages;
    }

    return (
        <div className="w-full flex justify-end gap-2">
            <a href="#" onClick={handleClick} className="w-10 h-10 rounded-md flex justify-center items-center hover:bg-primary-800 hover:text-white"><ChevronLeft /></a>
            { generatePagesButtons().map(button => button) }
            <a href="#" onClick={handleClick} className="w-10 h-10 rounded-md flex justify-center items-center hover:bg-primary-800 hover:text-white"><ChevronRight /></a>
        </div>
    );
};

export default Pagination;

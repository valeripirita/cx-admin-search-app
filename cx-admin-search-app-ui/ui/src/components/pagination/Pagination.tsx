import React from 'react';

export type PaginationProps = {
    pagesCount: number;
    currentPage: number;
    pageSize: number;
}

const Pagination = ({currentPage, pageSize, pagesCount}: PaginationProps) => {

    const handleClick = (event: React.SyntheticEvent) => {
        event.preventDefault();
        alert('go to some page');
    }

    return (
        <div className="w-full flex justify-end gap-2">
            <a href="#" onClick={handleClick} className="w-10 h-10 rounded-md flex justify-center items-center hover:bg-primary-800 hover:text-white">{'<'}</a>
            <a href="#" onClick={handleClick} className="w-10 h-10 rounded-md bg-primary-500 text-white flex justify-center items-center hover:bg-primary-800">1</a>
            <a href="#" onClick={handleClick} className="w-10 h-10 rounded-md flex justify-center items-center hover:bg-primary-800 hover:text-white">2</a>
            <a href="#" onClick={handleClick} className="w-10 h-10 rounded-md flex justify-center items-center hover:bg-primary-800 hover:text-white">3</a>
            <a href="#" onClick={handleClick} className="w-10 h-10 rounded-md flex justify-center items-center hover:bg-primary-800 hover:text-white">4</a>
            <a href="#" onClick={handleClick} className="w-10 h-10 rounded-md flex justify-center items-center hover:bg-primary-800 hover:text-white">{'>'}</a>
        </div>
    );
};

export default Pagination;

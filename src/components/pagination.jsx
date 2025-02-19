"use client";
import React from "react";

export default function Pagination({ pages, currentPage, setCurrentPage }) {
    const pageNumbers = new Array(pages)
        .fill(null)
        .map((_, index) => index + 1);

    return (
        <div className="w-full flex justify-center">
            <div className="join">
                <button
                    disabled={currentPage == 1}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="join-item btn"
                >
                    anterior
                </button>
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        className="join-item btn"
                        disabled={currentPage == page}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}
                <button
                    disabled={currentPage == pages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="join-item btn"
                >
                    siguente
                </button>
            </div>
        </div>
    );
}

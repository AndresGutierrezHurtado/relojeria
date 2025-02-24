"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Pagination({ pages, page, currentPage }) {
    const router = useRouter();
    const setCurrentPage = (newPage) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        router.push(`${currentPage}?page=${newPage}`);
    };

    return (
        <div className="w-full flex justify-center">
            <div className="join">
                <button
                    disabled={page == 1}
                    onClick={() => setCurrentPage(parseInt(page) - 1)}
                    className="join-item btn"
                >
                    anterior
                </button>
                {Array.from({ length: pages }, (_, i) => i + 1).map((newPage) => (
                    <button
                        key={newPage}
                        className="join-item btn"
                        disabled={newPage == page}
                        onClick={() => setCurrentPage(newPage)}
                    >
                        {newPage}
                    </button>
                ))}
                <button
                    disabled={page == pages}
                    onClick={() => setCurrentPage(parseInt(page) + 1)}
                    className="join-item btn"
                >
                    siguiente
                </button>
            </div>
        </div>
    );
}

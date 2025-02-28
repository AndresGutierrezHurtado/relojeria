import React from "react";

export default function TestimonialCard({ quote, author, role }) {
    return (
        <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:border-yellow-500/30 transition-colors duration-300">
            <div className="text-yellow-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
            </div>
            <p className="text-gray-300 italic">{quote}</p>
            <div className="mt-auto pt-4 border-t border-gray-800">
                <p className="font-medium">{author}</p>
                <p className="text-sm text-gray-400">{role}</p>
            </div>
        </div>
    );
}

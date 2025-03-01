import { Quote } from "lucide-react";
import React from "react";

export default function TestimonialCard({ quote, author, role }) {
    return (
        <div className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:border-yellow-500/30 transition-colors duration-300">
            <div className="text-yellow-500">
                <Quote className="w-6 h-6" />
            </div>
            <p className="text-gray-300 italic">{quote}</p>
            <div className="mt-auto pt-4 border-t border-gray-800">
                <p className="font-medium">{author}</p>
                <p className="text-sm text-gray-400">{role}</p>
            </div>
        </div>
    );
}

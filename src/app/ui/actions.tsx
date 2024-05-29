"use client"

import { PlusIcon } from "lucide-react";

function handleClick() {
    console.log("increment like count")
}

export default function Actions() {
    return (
        <div className="container mx-auto py-4 w-full bg-white border-b border-slate-100 mb-4">
            <div className="w-full flex gap-4 items-center">
                <input className="border-s-slate-200 border flex grow rounded-lg text-sm p-2.5 me-2 mb-2" type="text" name="search" id="search" placeholder="Search something" />
                <button onClick={handleClick} type="button" className="text-white flex gap-1 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm p-2.5 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800">
                    Ajouter <PlusIcon size={16} />
                </button>
            </div>
        </div>
    );
}
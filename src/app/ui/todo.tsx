import { Trash } from "lucide-react";

export default function Todo() {
    return (
        <div className="flex p-4 w-full items-center justify-between border-s-slate-50 border rounded-md">
            <div className="flex gap-2 items-center">
                <input type="checkbox" name="check" id="prop" />
                <label htmlFor="check">To do validée</label>
            </div>
            <button type="button" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm p-2.5 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800">
                <Trash size={16} />
            </button>
        </div>
    );
}
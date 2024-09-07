import Link from "next/link"
import { LinkIcon } from "@heroicons/react/24/outline"

export default function Agents({labels}: {labels: string[]}){
    return (
        <>
            <div className="mt-2">
                {labels.map((label, i) => {
                    return <Link
                    key={i}
                    href={"Nav"}
                    className={"flex h-[36px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"}
                  >
                    <LinkIcon className="w-6" />
                    <p className="hidden md:block">{label}</p>
                  </Link>
                })}
            </div>
        </>
    )
}
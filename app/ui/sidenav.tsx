import NavLinks from "@/app/ui/nav-links"
import SocialLinks from "@/app/ui/socials-links"
import Agents from "@/app/ui/agent-links"

import {Agent} from '@/app/lib/definitions'


const prompts: Agent[] = [
    {
        id: "1",
        messages: [

        ], 
        label: 'Basketball',
    },
    {
        id: "2",
        messages: [

        ], 
        label: 'Football',
    },
    {
        id: "3",
        messages: [

        ], 
        label: 'Hockey',
    },
]

export default function SideNav() {
    return (
        <nav className="bg-gray-50">
            <div className="flex h-screen flex-col justify-between py-4 px-5 border-r-2 border-blue-500">
                <div className="w-full flex items-center">
                    <div className="mr-2 w-30 w-[32] h-[32]">
                        🖇️
                    </div>
                    <div>
                        <p className="font-bold">AgentOps</p>
                    </div>
                </div>
                <div className="grow">
                    <Agents labels={prompts.map((agent) => agent.label)}/>
                </div>
                <div>
                    <p className="font-semibold text-xs mb-2">Pages</p>
                    <div>
                        <NavLinks />
                    </div>
                    <div className="pt-2">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </nav>
    )
}
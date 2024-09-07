'use client'

import {
    SocialIcon
} from 'react-social-icons'

type SocialLink = {
    url: string,
    network: string,
}

const links: SocialLink[] = [
    {url: "https://www.linkedin.com/company/aistaff/", network: "linkedin"},
    {url: "https://www.twitter.com/AgentOpsAI/", network: "twitter"},
    {url: "https://github.com/AgentOps-AI/agentops", network: "github"},
]

export default function SocialLinks(){
    return (
        <>
            <div className='flex flex-row justify-center'>
                {links.map((link, i) => <div key={i} className='mx-0.5'>
                    <SocialIcon 
                    url={link.url}
                    network={link.network}
                    label={link.network}
                    target="_blank"
                    style={{
                        height: "40px",
                        width: "40px"
                    }}
                    />
                </div>
                )}
            </div>
        </>
    )
}
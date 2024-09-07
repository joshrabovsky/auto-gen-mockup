export type NavLink = {
    name: string,
    href: string,
    icon: any
}

export type Message = {
    id: string,
    content: string,
    type: 'general' | 'task added' | 'executing' | 'finished'
}

export type Agent = {
    id: string,
    messages: Message[],
    label: string
}
export type BulletSchema = {
    image: string
    title: string
    link: LinkProps
}

export type LinkProps = {
    url: string,
    attributeNofollow?: boolean
    attributetitle?: string
    openNewTab?: boolean
    newTab?: boolean
}

export type BulletsSchema = Array<BulletSchema>
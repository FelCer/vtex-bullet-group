import React, { PropsWithChildren } from "react"
import { BulletGroupProp } from "../interfaces/BulletsInterfaces";
import { BulletMap } from "./BulletMap";
import { useDevice } from 'vtex.device-detector'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { useCssHandles } from 'vtex.css-handles'

const BulletsGroup = ({ bullets, children }: PropsWithChildren<BulletGroupProp>) => {
    const { isMobile } = useDevice();
    const { list } = useListContext() || []
    const CSS_HANDLES = [
        'bullet__container'
    ]
    const handles = useCssHandles(CSS_HANDLES)

    const bulletsGroup = BulletMap(bullets)

    const newBulletsGroup = list.concat(bulletsGroup)
    return (
        <ListContextProvider list={newBulletsGroup}>
            {
                isMobile ?
                    <div className={handles.bullet__container}>
                        {bulletsGroup}
                    </div>
                    :
                    children
            }
        </ListContextProvider>
    )
}

export default BulletsGroup;
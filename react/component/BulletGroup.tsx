import React, { PropsWithChildren } from "react";
import { BulletGroupProp } from "../interfaces/BulletsInterfaces";
import { BulletMap } from "./BulletMap";
import { useCssHandles } from 'vtex.css-handles'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { useDevice } from 'vtex.device-detector'

const BulletGroup = ({ bullets, children }: PropsWithChildren<BulletGroupProp>) => {
    const { list } = useListContext() || []
    const { isMobile } = useDevice();
    const CSS_HANDLES = [
        'bullet__container'
    ]

    const handles = useCssHandles(CSS_HANDLES)

    const bulletsGroup = BulletMap(bullets);
    const newBulletGroup = list.concat(bulletsGroup)

    return (
        <ListContextProvider list={newBulletGroup}>
            {
                isMobile
                    ?
                    <div className={handles.bullet__container}>
                        {bulletsGroup}
                    </div>
                    :
                    children
            }

        </ListContextProvider>
    )
}

export default BulletGroup;
import React from "react";
import { BulletsSchema, BulletSchema } from "../typings/BulletsType";
import Bullet from "./Bullet";

export const BulletMap = (bullets: BulletsSchema) => {
    const emptyLink = {
        url: "",
        attributeNofollow: false,
        attributetitle: "",
        openNewTab: false,
        newTab: false,
    };

    return bullets.map((bullet: BulletSchema, index) => {
        return <Bullet
            key={index}
            image={bullet.image}
            title={bullet.title}
            link={(bullet.link ? bullet.link : emptyLink)}
        />
    });
};
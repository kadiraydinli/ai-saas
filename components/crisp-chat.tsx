"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("852e2ab6-7e95-40ea-826f-fec1504cb592");
    }, []);

    return null;
}
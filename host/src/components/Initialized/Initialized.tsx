import { useEffect } from "react";
import { setInitTime, useInitialized } from "../../redux";

const Initialized = () => {
    const initTime = useInitialized();

    useEffect(() => {
        if (!initTime) {
            setInitTime();
        }
    }, [initTime]);

    if (!initTime) {
        return null;
    }

    return <span>{initTime}</span>
}

export default Initialized;

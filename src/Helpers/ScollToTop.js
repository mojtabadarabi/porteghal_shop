import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {routesName} from '../Routes/Routes'

export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        if (routesName.includes(pathname)) window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

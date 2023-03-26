import { useMediaQuery } from "@mui/material";

const useDeviceType = () => {
    const isMobile = useMediaQuery('(max-width: 740px)');
    const isTablet = useMediaQuery('(max-width: 1024px)');
    const isDesktop = useMediaQuery('(min-width: 1025px');

    return {
        isMobile,
        isTablet,
        isDesktop
    }
}
export default useDeviceType
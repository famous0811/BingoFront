import useDarkMode, { useDarkModeEffects } from "./useDarkmode";

function useTheme() {
    const { isDark } = useDarkMode();

    useDarkModeEffects();
    const theme = {
        isDark,
    };

    return theme;
}

export default useTheme;

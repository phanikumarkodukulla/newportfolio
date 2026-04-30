/**
 * Utility functions for theme-aware styling
 * Import and use these functions to get consistent theme classes
 */
import { useTheme } from './ThemeContext';

/**
 * Common theme class combinations for quick use
 * Usage: const classes = useThemeClasses();
 *        className={classes.card}
 */
export function useThemeClasses() {
    const { isDark } = useTheme();

    return {
        // Background colors
        bgPrimary: isDark ? 'bg-[#0A1929]' : 'bg-white',
        bgSecondary: isDark ? 'bg-[#020817]' : 'bg-gray-50',
        bgTertiary: isDark ? 'bg-[#0F2942]' : 'bg-gray-100',

        // Text colors
        textPrimary: isDark ? 'text-[#E8F1F5]' : 'text-gray-900',
        textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
        textTertiary: isDark ? 'text-gray-400' : 'text-gray-500',

        // Cards and containers
        card: isDark
            ? 'bg-white/[0.03] border border-white/10 backdrop-blur-xl'
            : 'bg-black/[0.03] border border-black/10 backdrop-blur-xl',
        cardHover: isDark
            ? 'hover:bg-white/[0.06] hover:border-blue-400/30'
            : 'hover:bg-black/[0.06] hover:border-blue-400/30',

        // Buttons
        buttonPrimary: isDark
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-blue-500 hover:bg-blue-600 text-white',
        buttonSecondary: isDark
            ? 'bg-white/5 hover:bg-white/10 text-gray-200'
            : 'bg-black/5 hover:bg-black/10 text-gray-900',

        // Borders
        border: isDark ? 'border-white/10' : 'border-black/10',
        borderLight: isDark ? 'border-white/5' : 'border-black/5',

        // Input fields
        input: isDark
            ? 'bg-[#020817] border-white/10 text-white placeholder-gray-400 focus:border-blue-500'
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-600 focus:border-blue-400',

        // Accent/Highlight
        accent: isDark ? 'text-[#00F0FF]' : 'text-blue-600',
    };
}

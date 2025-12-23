import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/theme-context';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg border-2 border-foreground/20 hover:border-foreground/40 bg-background/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                <motion.div
                    initial={false}
                    animate={{
                        scale: isDark ? 1 : 0,
                        rotate: isDark ? 0 : 180,
                        opacity: isDark ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Moon className="w-5 h-5 text-slate-300" />
                </motion.div>

                <motion.div
                    initial={false}
                    animate={{
                        scale: isDark ? 0 : 1,
                        rotate: isDark ? -180 : 0,
                        opacity: isDark ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Sun className="w-5 h-5 text-amber-500" />
                </motion.div>
            </div>
        </motion.button>
    );
}

import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/theme-context';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg border-2 shadow-lg hover:shadow-xl transition-all"
            style={{
                backgroundColor: isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(251, 191, 36, 0.15)',
                borderColor: isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(251, 191, 36, 0.4)',
            }}
            whileHover={{ 
                scale: 1.05,
                backgroundColor: isDark ? 'rgba(59, 130, 246, 0.25)' : 'rgba(251, 191, 36, 0.25)',
            }}
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
                    <Moon className="w-5 h-5 text-blue-400" />
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
                    <Sun className="w-5 h-5 text-amber-600" />
                </motion.div>
            </div>
        </motion.button>
    );
}

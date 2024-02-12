import { useEffect, useState } from "react";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

function Theme() {
  const [isDark, setIsDark] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  return (
    <div>
       <button 
        
        type="button"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      >
        {isDark ? (
          <FiSun aria-label="light-theme" />
        ) : (
          <FiMoon aria-label="light-dark-theme" />
        )}
      </button>
    </div>
  );
}

export { Theme };

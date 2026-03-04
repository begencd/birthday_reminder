import { useColorScheme as useRNColorScheme } from 'react-native';
import { Colors } from '../constants/theme';

export function useTheme() {
  const colorScheme = useRNColorScheme();
  const isDark = colorScheme === 'dark';
  
  return {
    colors: isDark ? Colors.dark : Colors.light,
    isDark,
  };
}

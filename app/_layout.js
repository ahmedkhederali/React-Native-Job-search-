import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
export default function Home() {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
      });
      // Define a callback function to hide the splash screen when the fonts have loaded
const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  // If the fonts have not loaded yet, return null to prevent anything from being rendered on the screen
  if (!fontsLoaded) {
    return null;
  }
    // Render the Stack component with the onLayoutRootView function passed to the onLayout prop
return (
    <Stack onLayout={onLayoutRootView} />
  );
}
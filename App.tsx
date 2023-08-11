import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import theme from "@theme/index";
import { Loading } from "@components/Loading";

export default function App() {
  const [fonstLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      {fonstLoaded ? <Loading /> : <Loading />}
    </ThemeProvider>
  );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MedBuddyCornerLogo from "../components/MedBuddyCornerLogo";

// import screens
import HomeScreen from "../screens/HomeScreen";
import SelectLanguageScreen from "../screens/SelectLanguageScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import PreviewScreen from "../screens/PreviewScreen";
import VideoScreen from "../screens/VideoScreen";
import InformationScreen from "../screens/InformationScreen";
import QuestionnaireScreen from "../screens/QuestionnaireScreen";
import OverviewScreen from "../screens/OverviewScreen";
import AgreementScreen from "../screens/AgreementScreen";
import FaqScreen from "../screens/FaqScreen";

// store the route names in variables
export const homeScreenRoute = "HomeScreen";
export const selectLanguageScreenRoute = "SelectLanguageScreen";
export const registrationScreenRoute = "RegistrationScreen";
export const previewScreenRoute = "PreviewScreen";
export const videoScreenRoute = "VideoScreen";
export const informationScreenRoute = "InformationScreen";
export const questionnaireScreenRoute = "QuestionnaireScreen";
export const overviewScreenRoute = "OverviewScreen";
export const agreementScreenRoute = "AgreementScreen";
export const faqScreenRoute = "FaqScreen";

// create an array of screens
const screens = [
  { name: homeScreenRoute, component: HomeScreen },
  { name: selectLanguageScreenRoute, component: SelectLanguageScreen },
  { name: registrationScreenRoute, component: RegistrationScreen },
  { name: previewScreenRoute, component: PreviewScreen },
  { name: videoScreenRoute, component: VideoScreen },
  { name: informationScreenRoute, component: InformationScreen },
  { name: questionnaireScreenRoute, component: QuestionnaireScreen },
  { name: overviewScreenRoute, component: OverviewScreen },
  { name: agreementScreenRoute, component: AgreementScreen },
  { name: faqScreenRoute, component: FaqScreen },
];

const Stack = createNativeStackNavigator();

export default function MedBuddyStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={homeScreenRoute}
        screenOptions={{ headerShown: false }}
      >
        {screens.map((screen, index) => (
          <Stack.Screen
            key={index}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

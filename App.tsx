import "react-native-gesture-handler";
import { ReminderProvider } from "./src/contexts/ReminderContext";
import { Routes } from "./src/routes";
import * as serviceWorkerRegistration from "./src/serviceWorkerRegistration";

export default function App() {
  return (
    <ReminderProvider>
      <Routes />
    </ReminderProvider>
  );
}

serviceWorkerRegistration.register();

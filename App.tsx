import "react-native-gesture-handler";
import { ReminderProvider } from "./src/contexts/ReminderContext";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <ReminderProvider>
      <Routes />
    </ReminderProvider>
  );
}

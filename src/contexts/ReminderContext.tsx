import { createContext, useState } from "react";
import { Keyboard } from "react-native";

export const TasksContext = createContext({});

interface ReminderProviderProps {
  children: any;
}

export function ReminderProvider({ children }: ReminderProviderProps) {
  // const [reminder, setReminder] = useState<any>();
  const [reminderItems, setReminderItems] = useState<any>([]);

  const handleAddReminder = (text: any, dueDate: any) => {
    Keyboard.dismiss();
    setReminderItems([...reminderItems, {
      text,
      dueDate,
    }]);
  };

  const completeReminder = (index: any) => {
    let itemsCopy = [...reminderItems];
    itemsCopy.splice(index, 1);
    setReminderItems(itemsCopy);
  };

  return (
    <TasksContext.Provider
      value={{
        reminderItems,
        handleAddReminder,
        completeReminder,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

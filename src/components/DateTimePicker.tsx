import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { Button, View } from "react-native";

interface DateTimePickerProps {
  date: any;
  setDate: any;
}

export default function DateTimePicker({ date, setDate }: DateTimePickerProps) {
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
      marginTop: 20,
    }}>
      <Button title="Escolher Data" onPress={showDatepicker} />
      <Button title="Escolher Horário" onPress={showTimepicker} />
    </View>
  );
}

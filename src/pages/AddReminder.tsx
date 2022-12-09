import { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import { TasksContext } from "../contexts/ReminderContext";
import DateTimePicker from "../components/DateTimePicker";
import moment from "moment";

interface AddReminderProps {
  navigation: any;
}

export default function AddReminder({ navigation }: AddReminderProps) {
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState<any>();
  const { handleAddReminder } =
    useContext<any>(TasksContext);

  return (
    <View>
      <KeyboardAvoidingView behavior={"height"} style={styles.writeTaskWrapper}>
        <TextInput
          multiline
          style={styles.input}
          placeholder={"Escreva o lembrete"}
          value={text}
          onChangeText={(_text) => setText(_text)}
        />
      </KeyboardAvoidingView>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginTop: 20,
        }}
      >{`Data Escolhida:\n${moment(date).format("DD/MM/YYYY HH:MM:SS")}`}</Text>

      <DateTimePicker date={date} setDate={setDate} />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 200,
        }}
      >
        <Button title="Adicionar Tarefa" onPress={() => {handleAddReminder(text, date); navigation.goBack()}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  writeTaskWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "90%",
    height: 100,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});

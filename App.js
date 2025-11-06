import { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Alert,
  Button,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import Question from "./components/Question";
import animalData from "./animalData";

export default function App() {
  //Record user's responses
  const [answers, setAnswers] = useState({});

  const handleSubmit = () => {
    let correctCount = 0;
    animalData.forEach((animal, index) => {
      if (answers[index] === animal.label) {
        correctCount++;
      }
    });

    Alert.alert(
      "Results",
      `You got ${correctCount} out of ${animalData.length} correct!`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Animal Quiz</Text>

      {animalData.map((animal, index) => (
        <Question
          key={index}
          index={index}
          question={animal}
          selectedAnswer={answers[index]}
          onSelect={(value) =>
            setAnswers((prev) => ({ ...prev, [index]: value }))
          }
        />
      ))}
      <TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
        <View style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit Answers</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { marginHorizontal: 30, marginVertical: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  submitButton: {
    backgroundColor: "lightcoral",
    borderRadius: 5,
    width: "40%",
    paddingVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});

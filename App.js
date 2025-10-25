import { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Alert,
  Button,
  StatusBar,
  View,
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
      {/*Array.prototype.some checks for the existance of one element that satisfy the f(x) provided as its arg*/}
      <Button
        title="Submit Answers"
        onPress={handleSubmit}
        disabled={animalData.some((element, index) => !answers[index])}
      />
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
});

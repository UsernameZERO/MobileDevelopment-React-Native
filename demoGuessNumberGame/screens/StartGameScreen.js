import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmHandleInput() {
    const choseNumber = parseInt(enteredNumber);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid number! ",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmHandleInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    backgroundColor: "#72063c",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  numberInput: {
    // position: "relative",
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    width: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  HStack,
  Button,
  Textarea,
  Text,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { HiSpeakerWave } from "react-icons/hi2";
import { FaStopCircle } from "react-icons/fa";

const App = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const sourceLang = "en";
  const targetLang = "es";
  const [isLoading, setIsLoading] = useState(false);
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setSourceText(transcript);
    }
  }, [transcript]);

  const handleTranslate = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/translate-text",
        {
          text: sourceText,
          sourceLang,
          targetLang,
        }
      );
      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error("Translation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeechToText = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      resetTranscript();
    } else {
      SpeechRecognition.startListening();
    }
  };

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(translatedText);
      utterance.lang = targetLang;
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported');
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <Box p={5} maxW="container.md" mx="auto">
      <VStack spacing={5} w="100%">
        <Textarea
          placeholder="Enter text to translate"
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          size="sm"
          resize="vertical"
        />
        <Button
          onClick={handleTranslate}
          w={{ base: "100%", md: "48%" }}
          colorScheme="linkedin"
        >
          {isLoading ? (
            <HStack spacing={2}>
              <Spinner size="sm" />
              <span>Translating...</span>
            </HStack>
          ) : (
            "Translate"
          )}
        </Button>
        <Text>Translated Text:</Text>
        <Textarea value={translatedText} readOnly size="sm" resize="vertical" />
        <Button
          onClick={handleTextToSpeech}
          w={{ base: "100%", md: "48%" }}
          colorScheme="linkedin"
        >
          Play Translated Text
        </Button>
        <Button
          aria-label="Toggle listening"
          onClick={handleSpeechToText}
          rightIcon={listening ? <FaStopCircle /> : <HiSpeakerWave />}
          colorScheme="linkedin"
          w={{ base: "100%", md: "48%" }}
        >
          {listening ? "Stop Listening" : "Start Listening"}
        </Button>
      </VStack>
    </Box>
  );
};

export default App;

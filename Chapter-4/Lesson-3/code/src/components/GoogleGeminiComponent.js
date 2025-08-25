import React, { useState } from "react";
import { getGeminiResponse } from "./geminiService";

const GoogleGeminiComponent = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const airesponse = await getGeminiResponse(input);
    setResponse(airesponse.text);
  };

  return (
    <div>
      <h2>Intergrating Gemini API with ReactJs.</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your prompt here!... "
        />

        <br />
        <button type="submit">Generate</button>

        {response.length ? <p>{response}</p> : <p>Generating....</p>}
      </form>
    </div>
  );
};

export default GoogleGeminiComponent;

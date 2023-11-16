import { useState } from "react";
import * as OpenAI from "openai";

const apiKey = "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";
const configuration = {
  apiKey: apiKey,
  dangerouslyAllowBrowser:true,
};

const openai = new OpenAI.default(configuration);


function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: input,
      max_tokens: 100,
    });

    setOutput(response.data.choices[0].text);
  };

  return (
    <div className="bg-gray-900 h-screen flex flex-col dark:bg-gray-800 dark:text-gray-500">
      <div className="flex bg-white text-black text-center justify-center py-4">
        VATAR GPT
      </div>
      <div className="flex-1 overflow-y-scroll">
        <div className="flex justify-end mt-2 mr-2">
          <div className="bg-green-500 rounded-lg px-4 py-2 text-black max-w-sm">
            Hello
          </div>
        </div>
        <div className="flex justify-start mt-2 ml-2">
          <div className="bg-white rounded-lg px-4 py-2 text-black max-w-sm">
            Can you help me
          </div>
        </div>
        {output ? (
            <div className="flex justify-end mt-2 mr-2">
              <div className="bg-green-500 rounded-lg px-4 py-2 text-black max-w-sm">
                {output}
              </div>
            </div>
          ):null}
      </div>
      <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <input 
            type="text"
            className="w-full border rounded-lg py-2 px-4 dark:bg-gray-700 dark:text-gray-200"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type Something...." 
            />
            <button type="submit" className="bg-green-500 hover:bg-green-600 rounded-lg px-2 py-4 text-white ml-2">
              Send
            </button>
          </div>
      </form>
    </div>
  )
}

export default App

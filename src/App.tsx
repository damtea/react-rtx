import { useState } from "react";
import RTXEditor from "./components/rtx/editor";
import { Content } from "@tiptap/react";
function App() {
  const [value, setValue] = useState<Content>();
  return (
    <div className="p-4">
      <RTXEditor
        value={value}
        onValueChange={(value) => {
          setValue(value);
        }}
      />
    </div>
  );
}

export default App;

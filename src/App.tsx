import { useState } from "react";
import RTXEditor from "./components/rtx/editor";
import { Content } from "@tiptap/react";
import RTXViewer from "./components/rtx/viewer";
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
      <RTXViewer value={value} key={value?.toString()} />
    </div>
  );
}

export default App;

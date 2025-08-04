import { useState } from "react";
import RTXEditor from "./components/rtx/editor";
import { Content } from "@tiptap/react";
import RTXViewer from "./components/rtx/viewer";
import { ThemeColorSwitch } from "./components/themeColorSwitch";

function App() {
  const [value, setValue] = useState<Content>();
  return (
    <div className="p-4">
      <p className="mb-4 font-semibold text-center">
        Welcome to React RTX Demo
      </p>
      <RTXEditor
        value={value}
        onValueChange={(value) => {
          setValue(value);
        }}
      />
      <p className="mt-4">Output:</p>
      <div className="flex shadow mt-2 px-4 py-2 border rounded-lg">
        <RTXViewer value={value} key={value?.toString()} />
      </div>
      <ThemeColorSwitch />
    </div>
  );
}

export default App;

import { Content, EditorContent } from "@tiptap/react";
import { useRTXEditor } from "./hooks/useEditor";
import "./styles/index.css";
type RTXEditorProps = {
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  placeholder?: string;
  value?: Content;
  onValueChange?: (value?: Content) => void;
};
export default function RTXViewer({
  containerProps,
  ...props
}: RTXEditorProps) {
  const { editor } = useRTXEditor({
    editable: true,
    placeholder: props.placeholder,
    content: props.value,
    onUpdate: (value) => {
      if (props?.onValueChange) props.onValueChange(value);
    },
  });

  if (!editor) {
    return <div>Loading...</div>;
  }

  return <EditorContent editor={editor} readOnly={true} />;
}

import { cn } from "@/lib/utils";
import { Content, EditorContent } from "@tiptap/react";
import { useRTXEditor } from "./hooks/useEditor";
import EditorToolbar from "./toolbar";
import "./styles/index.css";
type RTXEditorProps = {
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  placeholder?: string;
  value?: Content;
  onValueChange?: (value?: Content) => void;
};
export default function RTXEditor({
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

  return (
    <div className="gap-2 grid">
      <EditorToolbar editor={editor} />
      <div
        {...containerProps}
        className={cn(
          "w-full min-h-36 px-4 py-2 shadow-xs border transition-[color,box-shadow] border-input rounded-md bg-transparent cursor-text",
          containerProps?.className
        )}
        onClick={() => {
          editor?.chain().focus().run();
        }}
      >
        <EditorContent
          editor={editor}
          readOnly={false}
          className="rtx-editor"
        />
      </div>
    </div>
  );
}

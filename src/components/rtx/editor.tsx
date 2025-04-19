import { cn } from "@/lib/utils";
import { EditorContent } from "@tiptap/react";
import { useRTXEditor } from "./hooks/useEditor";
type RTXEditorProps = {
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  placeholder?: string;
  value?: string;
  onValueChange?: (value?: string) => void;
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
      if (props?.onValueChange) props.onValueChange(value?.toString());
    },
  });

  if (!editor) {
    return <div>Loading...</div>;
  }

  return (
    <div
      {...containerProps}
      className={cn(
        "w-full h-36 px-4 py-1 shadow-xs border transition-[color,box-shadow] border-input rounded-md bg-transparent cursor-text",
        containerProps?.className
      )}
      onClick={() => {
        editor?.chain().focus().run();
      }}
    >
      <EditorContent editor={editor} readOnly={false} className="rtx-editor" />
    </div>
  );
}

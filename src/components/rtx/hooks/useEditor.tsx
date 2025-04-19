import { Content, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";

export type useRTXEditorProps = {
  content?: Content;
  onUpdate: (content: Content) => void;
  placeholder?: string;
  editable: boolean;
};
export const useRTXEditor = (props: useRTXEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      //   HorizontalRule,
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "right", "center", "justify"],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "font-semibold text-blue-500",
        },
      }),
      Placeholder.configure({
        placeholder: () => props.placeholder || "Type something...",
        showOnlyCurrent: true,
      }),
    ],
    content: props.content,
    onUpdate: ({ editor }) => {
      props.onUpdate(editor.getHTML());
    },
    editable: props.editable,
  });

  return { editor };
};

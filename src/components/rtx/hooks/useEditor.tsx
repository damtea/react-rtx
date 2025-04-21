import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { Content, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
export type useRTXEditorProps = {
  content?: Content;
  onUpdate: (content: Content) => void;
  placeholder?: string;
  editable: boolean;
};
export const useRTXEditor = (props: useRTXEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
      }),
      Underline,
      Image,
      HorizontalRule.configure({
        HTMLAttributes: {
          class: "my-4 border-t border-gray-300",
        },
      }),
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
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: props.content,
    onUpdate: ({ editor }) => {
      props.onUpdate(editor.getHTML());
    },
    editable: props.editable,
  });

  return { editor };
};

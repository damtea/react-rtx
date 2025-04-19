import { Toggle } from "@/components/ui/toggle";
import {
  IconBold,
  IconClearFormatting,
  IconHeading,
  IconItalic,
  IconStrikethrough,
  IconUnderline,
} from "@tabler/icons-react";
import { Editor } from "@tiptap/react";
import { SimpleToolTip } from "./custom-tooltip";
export default function FontFormatters({ editor }: { editor: Editor }) {
  return (
    <>
      <SimpleToolTip title={"Heading"}>
        <Toggle
          asChild
          onPressedChange={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          // disabled={!editor.chain().focus().toggleHeading({ level: 1 }).run()}
          pressed={editor.isActive("heading", { level: 1 })}
        >
          <IconHeading className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
      <SimpleToolTip title={"Bold"}>
        <Toggle
          asChild
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          pressed={editor.isActive("bold")}
        >
          <IconBold className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
      <SimpleToolTip title={"Italic"}>
        <Toggle
          asChild
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          pressed={editor.isActive("italic")}
        >
          <IconItalic className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
      <SimpleToolTip title={"Underline"}>
        <Toggle
          asChild
          onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          pressed={editor.isActive("underline")}
        >
          <IconUnderline className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
      <SimpleToolTip title={"Strikethrough"}>
        <Toggle
          asChild
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          pressed={editor.isActive("strikethrough")}
        >
          <IconStrikethrough className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
      <SimpleToolTip title={"Unset All Marks"}>
        <Toggle
          asChild
          onPressedChange={() => editor.commands.unsetAllMarks()}
          disabled={!editor.can().chain().focus().unsetAllMarks().run()}
          pressed={
            !(
              editor.isActive("bold") ||
              editor.isActive("italic") ||
              editor.isActive("underline") ||
              editor.isActive("strike")
            ) // Add more as needed
          }
        >
          <IconClearFormatting className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
    </>
  );
}

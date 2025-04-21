import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup } from "@/components/ui/toolbar";
import {
  IconAlignCenter,
  IconAlignJustified,
  IconAlignLeft,
  IconAlignRight,
} from "@tabler/icons-react";
import { Editor } from "@tiptap/react";
import { SimpleToolTip } from "./custom-tooltip";
export default function TextAlignments({ editor }: { editor: Editor }) {
  return (
    <ToggleGroup className="flex flex-row items-center gap-1" type="single">
      <SimpleToolTip title={"Align Left"}>
        <Toggle
          asChild
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("left").run()
          }
          pressed={editor.isActive({ textAlign: "left" })}
        >
          <IconAlignLeft className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
      <SimpleToolTip title={"Align Center"}>
        <Toggle
          asChild
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("center").run()
          }
          pressed={editor.isActive({ textAlign: "center" })}
        >
          <IconAlignCenter className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
      <SimpleToolTip title={"Align Right"}>
        <Toggle
          asChild
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("right").run()
          }
          pressed={editor.isActive({ textAlign: "right" })}
        >
          <IconAlignRight className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
      <SimpleToolTip title={"Align Justify"}>
        <Toggle
          asChild
          onPressedChange={() =>
            editor.chain().focus().setTextAlign("justify").run()
          }
          pressed={editor.isActive({ textAlign: "justify" })}
        >
          <IconAlignJustified className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
    </ToggleGroup>
  );
}

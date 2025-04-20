import { Toggle } from "@/components/ui/toggle";
import { IconArrowBackUp, IconArrowForwardUp } from "@tabler/icons-react";
import { Editor } from "@tiptap/react";
import { SimpleToolTip } from "./custom-tooltip";
export default function ControlHistory({ editor }: { editor: Editor }) {
  return (
    <>
      <SimpleToolTip title={"Undo"}>
        <Toggle
          asChild
          onPressedChange={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <IconArrowBackUp className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
      <SimpleToolTip title={"Redo"}>
        <Toggle
          asChild
          onPressedChange={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <IconArrowForwardUp className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
    </>
  );
}

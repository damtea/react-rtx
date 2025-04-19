import { Toggle } from "@/components/ui/toggle";
import { IconMinus } from "@tabler/icons-react";
import { Editor } from "@tiptap/react";
import { SimpleToolTip } from "./custom-tooltip";
export default function InsertObjects({ editor }: { editor: Editor }) {
  return (
    <>
      <SimpleToolTip title={"Horizontale Rule"}>
        <Toggle
          asChild
          onPressedChange={() =>
            editor.chain().focus().setHorizontalRule().run()
          }
          pressed={editor.isActive("horizontalRule")}
        >
          <IconMinus className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
    </>
  );
}

import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup } from "@/components/ui/toolbar";
import { IconListDetails, IconListNumbers } from "@tabler/icons-react";
import { Editor } from "@tiptap/react";
import { SimpleToolTip } from "./custom-tooltip";
export default function InsertList({ editor }: { editor: Editor }) {
  return (
    <ToggleGroup className="flex flex-row items-center gap-1" type="single">
      <SimpleToolTip title={"Bullet List"}>
        <Toggle
          asChild
          onPressedChange={() =>
            editor.chain().focus().toggleBulletList().run()
          }
          pressed={editor.isActive("bulletList")}
        >
          <IconListDetails className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
      <SimpleToolTip title={"Order List"}>
        <Toggle
          asChild
          onPressedChange={() =>
            editor.chain().focus().toggleOrderedList().run()
          }
          pressed={editor.isActive("orderedList")}
        >
          <IconListNumbers className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
    </ToggleGroup>
  );
}

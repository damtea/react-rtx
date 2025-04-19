import { ScrollArea } from "@/components/ui/scroll-area";
import { Toolbar } from "@/components/ui/toolbar";
import { TextFormatters } from "./components/text-formatters";
import { type Editor } from "@tiptap/react";
import FontFormatters from "./components/font-formatters";
import { Separator } from "@/components/ui/separator";
import InsertObjects from "./components/insert-objects";

export default function EditorToolbar({ editor }: { editor: Editor }) {
  return (
    <Toolbar className="m-0 p-0">
      <ScrollArea aria-orientation="horizontal">
        <div className="flex flex-nowrap items-center gap-0.5">
          <TextFormatters editor={editor} />
          <Separator orientation="vertical" />
          <FontFormatters editor={editor} />
          <Separator orientation="vertical" />
          <InsertObjects editor={editor} />
        </div>
      </ScrollArea>
    </Toolbar>
  );
}

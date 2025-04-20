import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Toolbar } from "@/components/ui/toolbar";
import { TextFormatters } from "./components/text-formatters";
import { type Editor } from "@tiptap/react";
import FontFormatters from "./components/font-formatters";
import { Separator } from "@/components/ui/separator";
import InsertObjects from "./components/insert-objects";
import InsertList from "./components/insert-list";
import ControlHistory from "./components/control-history";

export default function EditorToolbar({ editor }: { editor: Editor }) {
  return (
    <ScrollArea aria-orientation="horizontal" className="min-w-96 max-w-full">
      <Toolbar className="m-0 p-0">
        <div className="flex flex-nowrap items-center gap-0.5 w-full">
          <div className="flex flex-1 items-center gap-0.5">
            <TextFormatters editor={editor} />
            <Separator orientation="vertical" />
            <FontFormatters editor={editor} />
            <Separator orientation="vertical" />
            <InsertObjects editor={editor} />
            <Separator orientation="vertical" />
            <InsertList editor={editor} />
          </div>
          <Separator orientation="vertical" />
          <ControlHistory editor={editor} />
        </div>
      </Toolbar>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

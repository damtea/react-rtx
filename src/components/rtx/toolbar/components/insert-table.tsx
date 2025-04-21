import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import {
  IconColumnInsertLeft,
  IconColumnInsertRight,
  IconColumnRemove,
  IconRowInsertBottom,
  IconRowInsertTop,
  IconTableMinus,
  IconTableOptions,
  IconTablePlus,
} from "@tabler/icons-react";
import { Editor } from "@tiptap/react";
import { TableCellsMergeIcon, TableCellsSplitIcon } from "lucide-react";
import { useState } from "react";
import { SimpleToolTip } from "./custom-tooltip";
export default function InsertTable({ editor }: { editor: Editor }) {
  const defaultRows = 3;
  const defaultColumns = 3;
  const [open, setOpen] = useState(false);

  const isActive = editor.isActive("table");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <SimpleToolTip title={isActive ? "Table Options" : "Insert Table"}>
        <Toggle asChild pressed={isActive}>
          <PopoverTrigger asChild>
            {isActive ? (
              <IconTableOptions className="size-4" />
            ) : (
              <IconTablePlus className="w-4 h-4" />
            )}
          </PopoverTrigger>
        </Toggle>
      </SimpleToolTip>
      <PopoverContent className="p-2 min-w-72 max-w-92">
        {isActive ? (
          <div className="flex flex-col gap-0.5">
            {editor.can().mergeOrSplit() && (
              <>
                <Button
                  size="sm"
                  variant={"ghost"}
                  className="justify-start"
                  onClick={() => editor.chain().focus().mergeOrSplit().run()}
                  disabled={!editor.can().mergeOrSplit()}
                >
                  {editor.can().mergeCells() ? (
                    <>
                      <TableCellsMergeIcon className="size-4" /> Merge Cells
                    </>
                  ) : (
                    <>
                      <TableCellsSplitIcon className="size-4" /> Split Cell
                    </>
                  )}
                </Button>
                <Separator />
              </>
            )}

            <Button
              size="sm"
              variant={"ghost"}
              className="justify-start"
              onClick={() => editor.chain().focus().addColumnBefore().run()}
              disabled={!editor.can().addColumnBefore()}
            >
              <IconColumnInsertLeft className="size-4" /> Add Column Before
            </Button>
            <Separator />
            <Button
              size="sm"
              variant={"ghost"}
              className="justify-start"
              onClick={() => editor.chain().focus().addColumnAfter().run()}
              disabled={!editor.can().addColumnAfter()}
            >
              <IconColumnInsertRight className="size-4" /> Add Column After
            </Button>
            <Separator />
            <Button
              size="sm"
              variant={"ghost"}
              className="justify-start"
              onClick={() => editor.chain().focus().deleteColumn().run()}
              disabled={!editor.can().deleteColumn()}
            >
              <IconColumnRemove className="size-4" /> Delete Column
            </Button>

            <Separator />
            <Button
              size="sm"
              variant={"ghost"}
              className="justify-start"
              onClick={() => editor.chain().focus().addRowBefore().run()}
              disabled={!editor.can().addRowBefore()}
            >
              <IconRowInsertTop className="size-4" /> Add Row Before
            </Button>
            <Separator />
            <Button
              size="sm"
              variant={"ghost"}
              className="justify-start"
              onClick={() => editor.chain().focus().addRowAfter().run()}
              disabled={!editor.can().addRowAfter()}
            >
              <IconRowInsertBottom className="size-4" /> Add Row After
            </Button>
            <Separator />
            <Button
              size="sm"
              variant={"ghost"}
              className="justify-start"
              onClick={() => editor.chain().focus().deleteRow().run()}
              disabled={!editor.can().deleteRow()}
            >
              <IconColumnRemove className="size-4" /> Delete Row
            </Button>
            <Separator />
            <Button
              size="sm"
              variant={"ghost"}
              className="justify-start"
              onClick={() => {
                setOpen(false);
                editor.chain().focus().deleteTable().run();
              }}
              disabled={!editor.can().deleteTable()}
            >
              <IconTableMinus className="size-4" /> Delete Table
            </Button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setOpen(false);
              const formData = new FormData(e.currentTarget);

              editor
                .chain()
                .focus()
                .insertTable({
                  rows: Number(formData.get("rows") || defaultRows),
                  cols: Number(formData.get("columns") || defaultColumns),
                  withHeaderRow: true,
                })
                .run();
            }}
            className="gap-4 grid"
          >
            <div className="gap-2 grid grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label className="text-sm">Rows</Label>
                <Input
                  name="rows"
                  defaultValue={defaultRows}
                  type="number"
                  placeholder="Number of rows..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-sm">Columns</Label>
                <Input
                  name="columns"
                  defaultValue={defaultColumns}
                  type="number"
                  placeholder="Number of columns..."
                />
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button type="submit" size="sm">
                Insert Table
              </Button>
            </div>
          </form>
        )}
      </PopoverContent>
    </Popover>
  );
}

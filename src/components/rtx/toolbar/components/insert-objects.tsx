import { Toggle } from "@/components/ui/toggle";
import { IconLink, IconMinus, IconPhotoPlus } from "@tabler/icons-react";
import { Editor } from "@tiptap/react";
import { SimpleToolTip } from "./custom-tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import InsertTable from "./insert-table";
export default function InsertObjects({ editor }: { editor: Editor }) {
  const { from, to } = editor.state.selection;
  const selectedText = editor.state.doc.textBetween(from, to, " ");
  return (
    <>
      <Popover>
        <SimpleToolTip title={"Hyperlink"}>
          <Toggle asChild pressed={editor.isActive("link")}>
            <PopoverTrigger asChild>
              <IconLink className="w-4 h-4" />
            </PopoverTrigger>
          </Toggle>
        </SimpleToolTip>
        <PopoverContent className="min-w-72 max-w-92">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const url = formData.get("url") as string;
              const text = formData.get("text") as string;

              if (url) {
                editor
                  .chain()
                  .focus()
                  .extendMarkRange("link")
                  .insertContent({
                    type: "text",
                    text: text || url,
                    marks: [
                      {
                        type: "link",
                        attrs: {
                          href: url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                    ],
                  })
                  .setLink({ href: url })
                  .run();
              }
            }}
            className="gap-4 grid"
          >
            <div className="flex flex-col gap-2">
              <Label className="text-sm">Link Text</Label>
              <Input
                name="text"
                defaultValue={selectedText || ""}
                type="text"
                placeholder="Paste or type text..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-sm">Link URL</Label>
              <Input
                required
                name="url"
                defaultValue={editor.getAttributes("link").href || ""}
                type="url"
                placeholder="Paste or type url..."
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                size={"sm"}
                type="button"
                variant="outline"
                disabled={!editor.isActive("link")}
                onClick={() => {
                  editor
                    .chain()
                    .focus()
                    .extendMarkRange("link")
                    .unsetLink()
                    .run();
                }}
              >
                Remove
              </Button>
              <Button type="submit" size="sm">
                Apply
              </Button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
      <InsertTable editor={editor} />
      {/* todo */}
      <SimpleToolTip title={"Insert Image"}>
        <Toggle
          asChild
          onPressedChange={() =>
            editor.chain().focus().setHorizontalRule().run()
          }
          pressed={editor.isActive("horizontalRule")}
        >
          <IconPhotoPlus className="w-4 h-4" />
        </Toggle>
      </SimpleToolTip>
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

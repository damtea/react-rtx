import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Toggle } from "@/components/ui/toggle";
import { IconPhotoCog, IconPhotoPlus } from "@tabler/icons-react";
import { Editor } from "@tiptap/react";
import { useRef, useState } from "react";
import { SimpleToolTip } from "./custom-tooltip";
export default function InsertImage({ editor }: { editor: Editor }) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isActive = editor.isActive("image");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <SimpleToolTip title={isActive ? "Remove Image" : "Add Image"}>
        <Toggle asChild pressed={isActive}>
          <PopoverTrigger asChild>
            {isActive ? (
              <IconPhotoCog className="size-4" />
            ) : (
              <IconPhotoPlus className="w-4 h-4" />
            )}
          </PopoverTrigger>
        </Toggle>
      </SimpleToolTip>
      <PopoverContent className="min-w-72 max-w-92">
        <div className="flex flex-col">
          {isActive ? (
            <Button
              onClick={() => {
                // editor
                //   .chain()
                //   .focus()
                //   .extendMarkRange("image")
                //   .setImage({ src: "" })
                //   .run();
                editor.commands.deleteSelection();
                setOpen(false);
                editor.commands.focus("end");
              }}
            >
              Remove Image
            </Button>
          ) : (
            <>
              <Input
                ref={inputRef}
                hidden
                multiple={false}
                id="url"
                name="url"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) {
                    return;
                  }
                  const url = URL.createObjectURL(file);
                  if (url) {
                    editor
                      .chain()
                      .focus()
                      .enter()
                      .enter()
                      .insertContent("")
                      .setImage({ src: url })
                      .run();
                    setOpen(false);
                    editor.commands.focus("end");
                  }
                }}
              />

              <Button
                onClick={() => {
                  inputRef.current?.click();
                }}
              >
                Insert Image
              </Button>
            </>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

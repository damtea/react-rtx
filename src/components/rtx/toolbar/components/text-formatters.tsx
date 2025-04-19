import { Editor } from "@tiptap/react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TextFormattersProps {
  editor: Editor;
}

export function TextFormatters({ editor }: TextFormattersProps) {
  const getValue = () => {
    if (editor.isActive("paragraph")) return "paragraph";
    if (editor.isActive("heading", { level: 1 })) return "h1";
    if (editor.isActive("heading", { level: 2 })) return "h2";
    if (editor.isActive("heading", { level: 3 })) return "h3";
    if (editor.isActive("heading", { level: 4 })) return "h4";
  };

  const onChange = (value: string) => {
    switch (value) {
      case "paragraph":
        editor.chain().focus().setParagraph().run();
        break;
      case "h1":
        editor.chain().focus().toggleHeading({ level: 1 }).run();
        break;
      case "h2":
        editor.chain().focus().toggleHeading({ level: 2 }).run();
        break;
      case "h3":
        editor.chain().focus().toggleHeading({ level: 3 }).run();
        break;
      case "h4":
        editor.chain().focus().toggleHeading({ level: 4 }).run();
        break;
    }
  };

  return (
    <Select
      onValueChange={onChange}
      defaultValue={getValue()}
      value={getValue()}
    >
      <SelectTrigger className="w-[130px]">
        <SelectValue placeholder="Select format" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem className="text" value="paragraph">
            Paragraph
          </SelectItem>
          <SelectItem className="text-lg" value="h4">
            Heading 4
          </SelectItem>
          <SelectItem className="text-xl" value="h3">
            Heading 3
          </SelectItem>
          <SelectItem className="text-2xl" value="h2">
            Heading 2
          </SelectItem>
          <SelectItem className="text-3xl" value="h1">
            Heading 1
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

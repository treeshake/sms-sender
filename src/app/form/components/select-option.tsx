import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@treeshake/ui/components/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@treeshake/ui/components/select";
import { type UseFormProps } from "..";

export type FormSchemaProps = {
  form: UseFormProps;
  label: string;
  options: string[];
  placeholder?: string;
};

export function SelectOptionFormField({
  form,
  label,
  options,
  placeholder,
}: FormSchemaProps) {
  return (
    <FormField
      control={form.control}
      name="sender"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={options[0]}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder ?? ""} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
}

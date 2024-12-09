import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select";

export function SelectScrollable({trigger = "trier par", content, onChange}) {
    return (
      <Select
      onChange={onChange}
      >
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder={trigger} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
              {
                  content?.map((item) => (
                      <SelectItem value={item.value} key={item.value}>{item.name}</SelectItem>
                  ))
              }
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }
import { profiles } from "@/data/profiles";
import { ServiceLayoutListItem } from "./ServiceLayoutListItem";

export const SerciveLayoutList = () => {

    return (
      <div className="hidden sm:flex flex-col gap-4 p-2">
        {profiles.map((item) => (
          <ServiceLayoutListItem key={item} {...item} />
        ))}
      </div>
    )
  };
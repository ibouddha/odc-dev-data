import { profiles } from "@/data/profiles";
import { ServiceLayoutGridCard } from "./SerciveLayoutGridCard";

export const SerciveLayoutGrid = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {profiles.map((item) => (
          <ServiceLayoutGridCard key={item} {...item} />
        ))}
      </div>
    );
  };
import { ServiceLayoutListItem } from "./ServiceLayoutListItem";

export const SerciveLayoutList = () => {
  const data = [...Array(50).keys()];

    return (
      <div className="hidden sm:flex flex-col gap-4 p-2">
        {data.map((item) => (
          <ServiceLayoutListItem key={item} />
        ))}
      </div>
    )
  };
const { SerciveLayoutGridCard } = require("./SerciveLayoutGridCard");

export const SerciveLayoutGrid = () => {
    const data = [...Array(50).keys()];
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.map((item) => (
          <SerciveLayoutGridCard key={item} />
        ))}
      </div>
    );
  };
import ToggleTheme from "@/theme/ToggleTheme";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
          <ToggleTheme/>
      <div>
        <h3 className="text-3xl mt-8 font-bold text-center">
          BIENVENU A LA P6 DEV DATA SONATEL ACADEMY
        </h3>
        <p className="text-lg font-bold text-center mt-4">
          Site en construction{" "}
        </p>
        <div className="flex justify-center">
          <a
            className="text-lg font-bold text-center mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            href="https://github.com/mouhamedlamotte/odc-dev-data"
            target="_blank"
          >
            Contribuer
          </a>
        </div>
          <div className="flex flex-col justify-center mt-8">
          <h3 className="text-lg font-bold text-center mt-4">
          Pages disponibles{" "}

        </h3>
            <a className="text-sm text-blue-500 hover:underline text-center mt-4" href="/inside/random">
              Random Choice
            </a>
          </div>
      </div>
    </div>
  );
}

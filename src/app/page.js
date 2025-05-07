import Image from "next/image";
import Header from "./matricula/components/header/header";
import Calendar from "./components/calendar";
import Events from "./components/events";
import TableMatriculas from "./components/matriculas";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="flex flex-col flex-1 ml-30">
          <Calendar />
          <Events />
        </div>
        <div className="w-[700px] mr-40">
          <TableMatriculas />
        </div>
      </div>
    </div>
  );
}


import { IEnterprise } from "../interfaces/strapiLocal";
import { bolshoi } from "./enterprises/bolshoi";
import { del_mare } from "./enterprises/del_mare";
import { della_liberta } from "./enterprises/della_liberta";
import { piazza_di_spagna } from "./enterprises/piazza_di_spagna";
import { plaza_beach_residence } from "./enterprises/plaza_beach_residence";
import { san_carlo } from "./enterprises/san_carlo";
import { san_marco } from "./enterprises/san_marco";
import { san_pietro } from "./enterprises/san_pietro";

export const enterprises: IEnterprise[] = [
  del_mare,
  bolshoi,
  plaza_beach_residence,
  san_pietro,
  della_liberta,
  san_carlo,
  san_marco,
  piazza_di_spagna,
];

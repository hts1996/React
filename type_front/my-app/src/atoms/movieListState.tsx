import {atom} from "recoil";
import { MMovie } from "../model/mmovie";
export const movieListState = atom<MMovie[]>({
    key:"movieListState",
    default:[]
})
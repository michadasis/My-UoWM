import { ClubsData as allClubs } from "../assets/data/Clubs";


export const useClubs = () => {

    return allClubs.sort((a, b) => a.index - b.index);
}


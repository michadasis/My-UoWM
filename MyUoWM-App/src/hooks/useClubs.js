/*
  MIT License

  Copyright (c) 2024 Open Source UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

*/

import { ClubsData } from "../assets/data/Clubs";
import { DEP_CAMPUS_MAP, CAMPUSES } from "../assets/data/MapData";

export const useClubs = (depCode) => {
  // Determine which campus to show clubs for.
  // If a department is selected, use its campus; otherwise fall back to Kastoria.
  const campus = depCode
    ? DEP_CAMPUS_MAP[depCode] ?? CAMPUSES.KASTORIA
    : CAMPUSES.KASTORIA;

  const filtered = ClubsData.filter((group) => group.campus === campus);
  return filtered.sort((a, b) => a.index - b.index);
};

"use strict";
import { capitalizeString } from "string_functions";
capitalizeString("hello!");

// ******************************************

"use strict";
export const foo = "bar";
export const bar = "foo";

export {foo, bar};  // Alternative to export all on one line

// ******************************************

"use strict";
import * as myStringModule from "capitalize_strings";

// ****************************************************************

"use strict";
export default function subtract(x,y) {return x - y;}

// *****************************************

"use strict";
import subtract from "math_functions";
subtract(7,4);
import Name from "./Name";
import Parts from "./Parts";

type Generator = {
    parts: {
        japanese: Parts,
        fantasy: Parts
    }
} & Name

export default Generator;

import Name from "./Name";
import Parts from "./Parts";

type Generator = {
    parts: {
        japanese: Parts,
        fantasy: Parts
    },
    numberOfNames: number,
} & Name

export default Generator;

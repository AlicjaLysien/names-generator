export type ArrayWithNames = [string, string, string];

type Name = {
    generatedNames: {
      chinese: ArrayWithNames | [],
      chinesePinyin: ArrayWithNames | [],
      fantasy: ArrayWithNames | [],
      japanese: ArrayWithNames | []
    }
  }

export default Name;

export type ArrayWithNames = [string, string, string];

type Name = {
    generatedNames: {
      fantasy: ArrayWithNames | [],
      japanese: ArrayWithNames | []
    }
  }

export default Name;

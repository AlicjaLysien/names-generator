# 🪄 Names generator

The app is a names generator for Japanese and Chinese lanaguages and fantasy worlds.
The names are stored and created by Redux - same as "name syllables" for creation for all generators.

## 🛠️ Technologies
<img src="./docs/icons/react.svg" width="24"> <img src="./docs/icons/redux.svg" width="24"> <img src="./docs/icons/typescript.svg" width="24"> <img src="./docs/icons/sass.svg" width="24"> 

- React
- React-router
- Typescript
- Redux-toolkit
- SASS
- Eslint

## ⚙️ Scripts

To run the project locally use:

``
npm run start
``

## 🖥️ Preview

**Link to live preview: [https://alicjalysien.github.io/names-generator](https://alicjalysien.github.io/names-generator/)**

![Image - preview of my page](/docs/readme-example.png)

## 🔮 Names

### 🧙🏼‍♂️ Fantasy
Fantasy names are created by two or three syllables randomly taken from an array. [src -> Utils]
The syllabes were created by my own imagination.

### 🍣 Japanese
Japanese names are created by two or three syllables randomly taken from an array. [src -> Utils]
For a moment is using only part of Japanese syllabes which all are introduced e.g. on [Wikipedia](https://ja.wikipedia.org/wiki/%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%AE%E9%9F%B3%E9%9F%BB) and transliterated to romanji.
romanji - transliteration to latin alphabet

### 🍜 Chinese
Chinese names are generated based on first 1000 Hanzi characters from: [https://en.wiktionary.org](https://en.wiktionary.org/wiki/Appendix:Table_of_General_Standard_Chinese_Characters).
Transliteration from hanzi to pinyin is managed by [pinyin-pro package](https://www.npmjs.com/package/pinyin-pro).
Chinese names are combination of one, two or three Chinese Hanzi.
hanzi - Chinese character
pinyin - transliteration to latin alphabet

## 🎨 Design
The colors were created by [canva palette generator](https://www.canva.com/colors/color-palette-generator/)

![Image - fantasy palette](/docs/fantasy-bg-palette.jpg) ![Image - japanese palette](/docs/japanese-bg-palette.jpg)


## Sources
The url of photos are added directly into code.

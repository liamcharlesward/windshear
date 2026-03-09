type HexColour = `#${string}`;
type RgbColour = `rgb(${number}, ${number}, ${number})`;
type RgbaColour = `rgba(${number}, ${number}, ${number}, ${number})`;

export type Colour = HexColour | RgbColour | RgbaColour;
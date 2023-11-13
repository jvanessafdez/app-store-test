interface Colors {
    primary: string;
    primaryTransparent: string;
    active: string;
    activeTransparent: string;
    inactive: string;
    inactiveTransparent: string;
    disable: string;
    disableTransparent: string;
    borderCard: string;
    borderCardTransparent: string;
    backgroundColor: string;
    backgroundColorTransparent: string;
    text: string;
    textTransparent: string;
    category2: string;
    category3: string;
  }
  
  function addTransparentColors(baseColors: Partial<Colors>): Colors {
    const transparentColors: Partial<Colors> = {};
  
    for (const key in baseColors) {
      const color = baseColors[key as keyof Colors];
      if (color) {
        transparentColors[key + "Transparent" as keyof Colors] = color + "33";
      }
    }
  
    return { ...baseColors, ...transparentColors } as Colors;
  }
  
  export const colors: Colors = addTransparentColors({
    primary: "#FF7700",
    active: "#1DD75B",
    inactive: "#E05858",
    disable: "#666666",
    borderCard: "#DAE0E6",
    backgroundColor: "#FFFFFF",
    text: "#49556D",
    category2: "#BCDAF9",
    category3: "#DFF9D9"
  });
export const PLATO_SERIES_KEY = "platoSeries";
// export const KANT_SERIES_KEY = "kantSeries";

export const platoSeries = {
  key: PLATO_SERIES_KEY,
  title: "Plato’s Republic",
  parts: [
    { part: 1, slug: "/the-republic-by-plato-part-1--book-i", label: "Part 1" },
    //{ part: 2, slug: "/the-republic-by-plato-part-2--book-i", label: "Part 2" },
    // { part: 3, slug: "/the-republic-by-plato-part-3--book-ii", label: "Part 3" }
  ],
};

// Future series can be added here
// export const kantSeries = { ... };

export const seriesByKey = {
  [platoSeries.key]: platoSeries,
  // [kantSeries.key]: kantSeries,
};

const forEachElement = (selector, callback) => {
  document.querySelectorAll(selector).forEach((element) => callback(element));
};

const fixElements = () => {
  forEachElement("div._aagw", (element) => element.remove()); // Remove click blocker in front of pictures
  forEachElement("div._aakh", (element) => element.remove()); // Remove control blocker in front of videos
  forEachElement("div._aakl", (element) => element.remove()); // Remove control blocker in front of videos
  // forEachElement("div._abck", (element) => element.remove()); // Remove audio controller in front of videos
  forEachElement("video._ab1d", (element) =>
    element.setAttribute("controls", "true")
  ); // Add controls to videos
};

fixElements();
setInterval(fixElements, 1000);

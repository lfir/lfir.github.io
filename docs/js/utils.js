"use strict";

// Set Copyright year in the Footer
document.getElementById("yearSpan").textContent = new Date().getFullYear();

// Copy-to-clipboard buttons
const idls = [
  ["userCpBtn", "cpTxtA", "cpTtipA"],
  ["addrICpBtn", "cpTxtB", "cpTtipB"],
  ["addrIICpBtn", "cpTxtC", "cpTtipC"],
];

for (let idl of idls) {
  const btn = document.getElementById(idl[0]);
  if (btn === null) continue;

  btn.addEventListener("click", function () {
    const textToCopy = document.getElementById(idl[1]).textContent;

    navigator.clipboard.writeText(textToCopy).then(function () {
      const tooltip = document.getElementById(idl[2]);
      // Show the tooltip when the button is clicked
      tooltip.style.visibility = "visible";
      // Hide the tooltip when not hovering the button
      btn.addEventListener("mouseleave", function () {
        tooltip.style.visibility = "hidden";
      });
    });
  });
}

document.addEventListener("mousemove", (event) => {
    const lightness = (event.clientX / window.innerWidth) * 100;
    document.documentElement.style.setProperty("--lightness", `${lightness}%`);
});
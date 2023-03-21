
const check =() =>{
    console.log('something')
}
// Preload images
const preloadFonts = id => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { check, preloadFonts, randomNumber  }
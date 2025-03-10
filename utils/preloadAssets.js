export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadAssets = async () => {
  const imagesToPreload = [
    '/images/R.jpg',
    // Add other critical images here
  ];

  try {
    await Promise.all(imagesToPreload.map(preloadImage));
    return true;
  } catch (error) {
    console.error('Error preloading assets:', error);
    return false;
  }
};

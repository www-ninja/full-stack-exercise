export const colors = ['#219ebc', '#023047', '#fb8500', '2a9d8f'];

export const pickRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

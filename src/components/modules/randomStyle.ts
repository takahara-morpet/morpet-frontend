export const getRandomStyle = (): React.CSSProperties => {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFDB33'];
  const fontSize = Math.floor(Math.random() * 20) + 16;

  return {
    color: colors[Math.floor(Math.random() * colors.length)],
    fontSize: `${fontSize}px`,
    margin: '0 4px',
    display: 'inline-block',
  };
};

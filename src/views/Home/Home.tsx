import placeholderImage from '../../assets/images/placeholder.jpg';

export const HomeView = () => {
  const title = 'React Boilerplate';
  return (
    <>
      <h1>{title}</h1>
      <h4>Environment Variables</h4>
      <ul>
        <li>- Environment: {process.env.NODE_ENV}</li>
        <li>- Server: {process.env.server}</li>
      </ul>
      <h4>Features</h4>
      <ul>
        <li>- TypeScript</li>
        <li>- Redux toolkit</li>
        <li>- Babel</li>
        <li>- Webpack</li>
        <li>- SCSS Modules</li>
        <li>- React Testing Library</li>
        <li>- Jest</li>
        <li>- ESLint</li>
        <li>- Prettier</li>
      </ul>
      <img
        src={placeholderImage}
        alt="placeholder"
        style={{ width: '200px' }}
      />
    </>
  );
};

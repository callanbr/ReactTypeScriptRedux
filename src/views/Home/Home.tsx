import placeholderImage from '../../assets/images/placeholder.jpg';

export const Home = () => {
  const title = 'Home';
  return (
    <>
      <div>
        <h1>{title}</h1>
        <ul>
          <li>{process.env.NODE_ENV}</li>
          <li>{process.env.server}</li>
        </ul>
        <img src={placeholderImage} alt="placeholder" />
      </div>
    </>
  );
};

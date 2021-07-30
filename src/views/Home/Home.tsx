import placeholderImage from '../../assets/images/placeholder.jpg';

export const HomeView = () => {
  const title = 'Home';
  return (
    <>
      <div>
        <h1>{title}</h1>
        <ul>
          <li>{process.env.NODE_ENV}</li>
          <li>{process.env.server}</li>
        </ul>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
          voluptates, nostrum minima repellendus aut et ducimus voluptatibus qui
          quaerat. Eos incidunt inventore aliquam, accusantium quibusdam velit
          exercitationem magnam quidem delectus autem repudiandae, libero
          repellat voluptatum officiis. Ducimus voluptatem voluptatibus, saepe
          libero nobis odit quas cupiditate quibusdam, itaque cum ea deleniti
          aut excepturi minus? Perspiciatis veniam est mollitia sequi aliquam
          animi tempora, sapiente maiores ex aperiam doloremque esse amet,
          molestiae aspernatur perferendis corporis consequuntur nam expedita
          soluta ipsa! Officia non maiores natus et, libero amet hic vel aut
          nemo placeat, labore veniam corrupti voluptatem officiis in
          voluptatibus nisi culpa voluptas aliquid.
        </p>
        <br />
        <img src={placeholderImage} alt="placeholder" height={200} />
      </div>
    </>
  );
};

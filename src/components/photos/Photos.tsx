import { useState } from 'react';
import { useFetchPhotosQuery } from '../../redux/features/photoApiSlice';

export const Photos = () => {
  const [limit, setLimit] = useState(10);
  const { data = [] } = useFetchPhotosQuery(limit);
  return (
    <>
      <div>
        <p>Photos to fetch:</p>
        <select
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <ul>
        {data.map((photo) => (
          <li key={photo.id}>
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              style={{ width: '200px' }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

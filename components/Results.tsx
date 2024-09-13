import React from 'react';
import ResultsCard from './ResultsCard';
import { AnimeNodeDetails } from '@/types';

interface ResultsProps {
  sectionTitle?: string;
  data: AnimeNodeDetails[];
}

const Results: React.FC<ResultsProps> = ({ sectionTitle, data }) => {
  return (
    <div className='mb-4'>
      <div className='flex justify-between'>
        <h4 className='text-lg'>{sectionTitle}</h4>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 auto-rows-auto gap-7 justify-between'>
        {data.map((anime) => (
          <ResultsCard
            key={anime.id}
            image={anime.main_picture.medium}
            title={anime.title}
            id={anime.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;

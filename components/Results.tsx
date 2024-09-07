'use client';
import React, { useEffect, useState, useMemo } from 'react';
import ResultsCard from './ResultsCard';
import { useAnime } from '@/context/AnimeContext';
import Link from 'next/link';
import { AnimeNode } from '@/types';

interface AnimeResults {
  id: number;
  title: string;
  main_picture: {
    medium: string;
  };
}

interface ResultsProps {
  endpoint: string;
  params: Record<string, string>;
  sectionTitle: string;
}

const Results: React.FC<ResultsProps> = ({
  endpoint,
  params,
  sectionTitle,
}) => {
  const { fetchData, loading, error } = useAnime();
  const [data, setData] = useState<AnimeResults[]>([]);

  // const stableParams = useMemo(() => params, [params]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData(endpoint, params);
      // console.log(result);
      setData((result as AnimeNode[]).map((item) => item.node)); // Extract the node property
    };

    fetchDataAsync();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='mb-4'>
      <div className='flex justify-between'>
        <h4 className='text-lg'>{sectionTitle}</h4>
        <Link href='/'>View All</Link>
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

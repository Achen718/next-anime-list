import { use } from 'react';
import DetailsCard from '@/components/details/DetailsCard';
import DetailsSection from '@/components/details/DetailsSection';
import { fetchAnimeDetail } from '@/utils/fetchUtils';

interface DetailsPageProps {
  params: {
    id: string;
  };
}

const DetailsPage: React.FC<DetailsPageProps> = ({ params }) => {
  const data = use(fetchAnimeDetail(params.id));

  const detailsCardData = {
    title: data.title,
    main_picture: data.main_picture,
    rank: data.rank,
    media_type: data.media_type,
    num_episodes: data.num_episodes,
    status: data.status,
    start_date: data.start_date,
    start_season: data.start_season,
    mean: data.mean,
    num_scoring_users: data.num_scoring_users,
    genres: data.genres,
    popularity: data.popularity,
  };

  const detailsSectionData = {
    synopsis: data.synopsis,
    background: data.background,
  };

  return (
    <section className='flex container mx-auto'>
      <DetailsCard data={detailsCardData} />
      <DetailsSection data={detailsSectionData} />
    </section>
  );
};

export default DetailsPage;

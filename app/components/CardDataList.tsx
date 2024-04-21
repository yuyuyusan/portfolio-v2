import { CardData } from '@/app/types/types';
import { Link } from 'lucide-react';

interface CardDataProps {
  cardAllData: CardData[];
}

const CardDataList = ({ cardAllData }: CardDataProps) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {cardAllData.map((cardData: CardData) => (
        <div key={cardData.id}>
          <h3 className="text-lg font-bold">{cardData.title}</h3>
          <a href={`/works/${cardData.id}`}>
            <p>{cardData.content}</p>
            Link
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardDataList;

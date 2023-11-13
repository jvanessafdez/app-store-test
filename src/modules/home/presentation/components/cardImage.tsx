import { Text, Image, TouchableOpacity } from 'react-native';
  import { SmallCard } from '../../../../components/common/SmallCard/smallCard';
import { ECategory } from '../../domain/product';
import general from '../../../../assets/css/general';

interface CardProps {
    color?: string;
    label: string;
    category: ECategory;
    setCategory: (category: ECategory) => void;
  }

export const CardImage: React.FC<CardProps> = ({ color, label, category, setCategory }) => {
    const images = {
      ELEMENT: require('../../../../assets/images/sport_elements.png'),
      CLOTHES: require('../../../../assets/images/clothes.png'),
      SHOES: require('../../../../assets/images/shoes.png')
    };
    return(
      <TouchableOpacity onPress={() => setCategory(category)}>
        <SmallCard
            width={110}
            color = {color && color}
        >
            <Image
            source={images[category]}
            style={general.stretch}
            />
            <Text style={[general.normalText, {textAlign: 'center'}]}>{label}</Text>
        </SmallCard>
      </TouchableOpacity>
    )
  }
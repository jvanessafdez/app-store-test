import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import header from '../assets/css/header';
import { SearchBar } from '../components/common/SearchBar/searchBar';

type HeaderProps = {
    title: string;
    navigation: any;
    home?: boolean;
    profile?: boolean;
    search?: boolean;
};

export function Header({ title, navigation, home, profile,search }: HeaderProps){
    const mode = home ? 'home' : profile ? 'profile' : 'none';

    const goBack = () => {
        navigation.goBack();
    };

    return(
        <View style = { header.header }>
            {search ? 
                <>
                <SearchBar title={title}/>
                </>
                :
                <>
                <TouchableOpacity onPress={goBack}>
                    <MaterialIcons name = {'arrow-back-ios'} size={18} color={'#000000'}/>
                </TouchableOpacity>
                <Text style={header.titleHeader}> { title } </Text>
                </>
            }
    </View>
)
}
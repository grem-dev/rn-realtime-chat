import React, {useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Product} from '../components/Product';

export interface ProductData {
  name: string;
  price: string;
  category: string;
  peso: string;
}

const PRODUCTS: ProductData[] = [
  {
    name: 'Fish Fresh Atlantic Salmon Fillet',
    price: '7.06',
    category: 'Seafood',
    peso: '76/lb',
  },
  {
    name: 'SunChips',
    price: '2.98',
    category: 'Deli',
    peso: '42.6cents/OZb',
  },
  {
    name: 'Doritos Cool Ranch Flavored Tortilla Chips',
    price: '2.72',
    category: 'Deli',
    peso: '27.9/oz',
  },
  {
    name: 'Fritos Flavor Twists Honey BBQ Corn Snacks',
    price: '2.5',
    category: 'Deli',
    peso: '27.0/oz',
  },
];

export function ProductListScreen({
  route: {params},
  navigation,
}: StackScreenProps<any>) {
  useEffect(() => {
    navigation.setOptions({
      title: params?.category,
    });
  }, []);

  function _renderItem(data: ProductData, i: number) {
    const {name, price} = data;
    return Product({name, price});
  }

  return (
    <View>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.name}
        renderItem={({item, index}) => {
          return params?.category === item.category
            ? _renderItem(item, index)
            : null;
        }}
      />
    </View>
  );
}

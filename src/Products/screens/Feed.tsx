import React, { useEffect, useState } from 'react';
import { } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { DepartmentCard } from '../components/DepartmentCard';
import { SearchBar } from '../components/SearchInput';
import { IDepartment } from '../product';

export function FeedScreen({ }) {
  const [departments] = useState<IDepartment[]>([
    {
      name: 'Grocery ',
      color: 'rgb(250, 250, 250)',
      bgColor: 'rgb(40, 40, 40)',
      image: 'grocery.jpg',
    },
    {
      name: 'Frozen Foods',
      color: 'rgb(255, 255, 255)',
      bgColor: 'rgb(35, 60, 141)',
      image: 'FroozenFood.jpg',
    },
    {
      name: 'Seafood',
      color: 'white',
      bgColor: 'rgb(30, 200, 191)',
      image: 'seafood.jpg',
    },
    {
      name: 'Meat',
      color: 'white',
      bgColor: 'rgb(184, 136, 14)',
      image: 'Meat.jpg',
    },
    {
      name: 'Appliances and Electronics.',
      color: 'white',
      bgColor: 'rgb(26, 192, 40)',
      image: 'grocery.jpg',
    },
    {
      name: 'Health and Beauty',
      color: 'white',
      bgColor: 'rgb(218, 30, 17)',
      image: 'grocery.jpg',
    },
    {
      name: 'Pharmacy',
      color: 'white',
      bgColor: 'rgb(58, 130, 217)',
      image: 'Pharmacy.jpg',
    },
    {
      name: 'Another one',
      color: 'white',
      bgColor: 'rgb(184, 136, 14)',
      image: 'Meat.jpg',
    },
    {
      name: 'Electronics stuff',
      color: 'white',
      bgColor: 'rgb(26, 192, 40)',
      image: 'Pharmacy.jpg',
    },
  ]);

  useEffect(() => { });

  return (
    <React.Fragment>
      <SearchBar OnSearch={() => { }} ref={undefined} />
      <ScrollView
        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {departments.map(DepartmentCard)}
      </ScrollView>
    </React.Fragment>
  );
}

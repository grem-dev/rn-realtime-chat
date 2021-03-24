export interface IDepartment {
  name: string;
  color: string;
  bgColor: string;
  image: string;
}

export interface ISearchBarProps {
  OnSearch: (val: string) => any;
  ref: any;
}

export interface IProduct {
  name: string;
  price: string;
}

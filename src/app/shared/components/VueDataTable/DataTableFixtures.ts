import { IDataTableHeader } from './IDataTable';

export const dataTableHeaderFixture: IDataTableHeader = {
  id:        {
    visible: false,
  },
  firstname: {
    title: 'Firstname',
  },
  lastname:  {
    title: 'Lastname',
  },
  age:       {
    title: 'Age',
  },
  address:   {
    title: 'Address',
  },
};

export const dataTableDataFixture = [
  { id: 1, firstname: 'Toni', lastname: 'Stark', address: 'Wallstreet 1', age: 37 },
  { id: 2, firstname: 'Richard', lastname: 'Brenson', address: 'Aurora', age: 19 },
  { id: 3, firstname: 'Julia', lastname: 'Roberts', address: 'Elmstreet', age: 3 },
  { id: 4, firstname: 'Justus', lastname: 'Jonas', address: 'Mainvalley', age: 56 },
  { id: 5, firstname: 'Sheldon', lastname: 'Cooper', address: 'BigBang', age: 42 },
  { id: 6, firstname: 'Toni', lastname: 'Stark', address: 'Wallstreet 1', age: 37 },
  { id: 8, firstname: 'Julia', lastname: 'Roberts', address: 'Elmstreet', age: 3 },
  { id: 10, firstname: 'Sheldon', lastname: 'Cooper', address: 'BigBang', age: 42 },
  { id: 7, firstname: 'Richard', lastname: 'Brenson', address: 'Aurora', age: 19 },
  { id: 9, firstname: 'Justus', lastname: 'Jonas', address: 'Mainvalley', age: 56 },
  { id: 12, firstname: 'Richard', lastname: 'Brenson', address: 'Aurora', age: 19 },
  { id: 11, firstname: 'Toni', lastname: 'Stark', address: 'Wallstreet 1', age: 37 },
  { id: 14, firstname: 'Justus', lastname: 'Jonas', address: 'Mainvalley', age: 56 },
  { id: 15, firstname: 'Sheldon', lastname: 'Cooper', address: 'BigBang', age: 42 },
  { id: 18, firstname: 'Julia', lastname: 'Roberts', address: 'Elmstreet', age: 3 },
  { id: 20, firstname: 'Sheldon', lastname: 'Cooper', address: 'BigBang', age: 42 },
  { id: 13, firstname: 'Julia', lastname: 'Roberts', address: 'Elmstreet', age: 3 },
  { id: 17, firstname: 'Richard', lastname: 'Brenson', address: 'Aurora', age: 19 },
  { id: 19, firstname: 'Justus', lastname: 'Jonas', address: 'Mainvalley', age: 56 },
  { id: 16, firstname: 'Toni', lastname: 'Stark', address: 'Wallstreet 1', age: 37 },
];

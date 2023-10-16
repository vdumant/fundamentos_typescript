import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'pedro',
    role: 'seller'
  },
];

const rta = _.groupBy(data, item => item.role);
console.log(rta);

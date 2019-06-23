// import método from 'biblioteca';
// * carrega tudo da lib
// as => alias para o método (novo nome)

import * as R from 'ramda';

import sum, { sub, multiplicacao, div as dividir } from './utils'

import react from 'react';
import reactDom from 'react-dom'


const arr1 = [1,1,3,5,6,8,4,9,9];
const arr2 = [2,6,5,98,483,4,8,,3,5];

const arr3 = R.union(arr1, arr2);

const arr4 = R.uniq(arr1);

console.log(arr3);

console.log(arr4);

console.log(sum(3,50));

console.log(sub(55,5));

console.log(multiplicacao(5, 6));

console.log(dividir(6, 6));

import {expect} from 'chai';
import 

{ sum, sub, mult, div } from '../src/main';

// var expect = require('chai').expect;
// var calc = require('../src/main.js');

describe('Calc',() => {
    //smoke tests
    describe('Smoke tests', () => {

        // it('should existe the calc lib', () => {
        //     expect(calc).to.exist;
        // });

        it('should exist the method `sum`', () => {
            expect(sum).to.exist;                           
        });

        it('should exist the method `sum`', () => {
            expect(sub).to.exist;                            
        });

        it('should exist the method `sum`', () => {
            expect(mult).to.exist;                            
        });

        it('should exist the method `sum`', () => {
            expect(div).to.exist;                            
        });
    });

    describe('Sum', function(){
        it('Should return 4 when `sum(2,2)`',  () => {
            expect(sum(2, 2)).to.be.equal(4);
        })
    
    });

    describe('Sub', function(){
        it('Should return 2 when `sub(2,2)`', () => {
            expect(sub(2, 2)).to.be.equal(0);
        })
    
    });

    describe('Mult', function(){
        it('Should return 2 when `mult(2,2)`', () => {
            expect(mult(2, 2)).to.be.equal(4);
        })
    
    });

    describe('Div', function(){
        it('Should return 2 when `div(2,2)`', () => {
            expect(div(6, 2)).to.be.equal(3);
        })
        
        it('should return `Não é possivel dividir por zero:` when division ', () => {
            expect(div(4, 0)).to.be.equal('Não é possivel dividir por zero:');
        })
    });

    

    //************************************************************************************************************/
    // var arr;
    // //roda uma ve, antes do bloco
    // before(function() {
      
    // });

    // // roda uma vez, depois do bloco
    // after(function() {
        
    // });
  
    // //roda todas as vezes, antes de cada bloco
    // beforeEach(function() {
    //     arr = [1, 2 ,3]
    // });
    
    // //roda todas as vezes, depois de cada bloco
    // afterEach(function() {
        
    // });

    // //testar tipos ou se existe(smoke test)
    // it('should be an array', function(){
    //     expect(arr).to.be.a('array');
    // })
  
    // it('should have of 4 when push another value to the array', function(){
    //     arr.push(4);
    //     expect(arr).to.have.length(4);
    //     //console.log(arr.length);

    // })

    // it('should have  a size  of 2 when pop  a value from the array', function(){
    //     arr.pop();
    //     //console.log(arr.length);
    //     expect(arr).to.have.length(2);
    // })

    // it('should remove the value 3 when use pop in the array', function(){
    //      //console.log(arr.pop() === 3);
    //     arr.pop();
    //     expect(arr).to.not.include(3);
    // })
});

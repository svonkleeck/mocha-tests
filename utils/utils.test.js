
const utils = require('./utils');
const expect = require('expect');

describe('Util Tests', () => {

    describe('#add', () => {

        it('should add 2 numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');

            // if (res !== 44) {
            //     throw new Error(`Expected 44, but got ${res}.`);
            // }
        });

        // async return required the done argument and function call done()
        it('should asyc add two numbers', (done) => { 
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });
    

    describe('#square', () => {
        it('should square 3', () => {
            var res = utils.square(3);

            expect(res).toBe(9).toBeA('number');
            // if (res !== 9) {
            //     throw new Error(`Expected 9, but got ${res}.`);
            // }
        });
 
        it('should asyc square a number', (done) => {
            utils.asyncSquare(5, (sqr) => {
                expect(sqr).toBeA('number');
                expect(sqr).toBe(25);
                done();
            });
        });
    });

    describe('#misc', () => {
        it('should compare a number of cases', () => {
            expect(12).toNotBe(11);
            expect(12).toNotBeA('string');
            // check objects
            var obj = {name: 'Scott'};
            expect(obj).toBe(obj);
            expect(obj).toEqual({name: 'Scott'}); // notice toEqual and not toBe which uses ===

            // member of an array or object
            expect([1,2,3]).toInclude(3);
            var obj2 = {
                name: 'Scott',
                age: 22,
                loc: 'PHL'
            }
            expect(obj2).toInclude({age:22});
            expect(obj2).toExclude({age:25});

        });

        it('should verify first and last names are set', () => {
            var user = {
                age: 24,
                loc: 'Philadelphia'
            };
            expect(utils.setName(user, 'Scott Allan'))
                .toInclude({
                    firstName: 'Scott',
                    lastName: 'Allan'
                })
                .toBeA('object');

        });
    });
    




});


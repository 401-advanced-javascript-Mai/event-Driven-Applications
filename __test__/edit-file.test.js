'use strict';

// hold all of information from the mock file 
jest.mock('fs');

const theEditOne = require('../edit-file.js');


describe(' fs module ', () => {
    describe('readFileEditAndwrite', () => {
        it('Read a File and return data as  type of "Object', () => {
            let file = `${__dirname}/files/data/person.json`;

            let data = theEditOne.readFileEditAndwrite(file);
            expect(typeof data).toBe('object')

        })
    })
    describe('readFileEditAndwrite', () => {

        // here i try to practice use async function and try -catch
        it('returns error when given a bad file', async () => {
            const file = `${__dirname}/files/data/bad.json`;
            try {
                let data = await editFile.readFile(file);
                expect(data).not.toBeDefined();
            }
            catch (error) { expect(error).toBeDefined(); }
        });
    });
});
    // describe('readFileEditAndwrite', () => {
    //     it('check if the function work correctly and can edit the data and write newdata in the file ', () => {
    //         let file = `${__dirname}/files/data/person.json`;
    //         let data = theEditOne.readFileEditAndwrite(file)
    //         console.log('data', data);
    //         // return data 
    //         // .then(result =>{

    //         //         console.log(result);
    //         //         expect(result.kids).toEqual(6);
    //         //       });
    //     });
    // })
'use strict';


let fs = require('fs') ;
// let util = require('util') ;
let {promisify} = require('util') ;
const events = require('./events.js')
 require('./logger.js') ;
// let reader = require('./lib/reader.js') ;
// let write = require('./lib/write.js');


let file = `${__dirname}/data/person.json`;

process.argv[2] = file
console.log( process.argv)

let readFile = promisify(fs.readFile);
// let writeFile = util.promisify(fs.writeFile);

// fs.readFile('', 'utf8' ,() => {

// })

// ////// herre we read data and then edit it  
let readFileEditAndwrite =(file) =>{
    // event.emit() 
    return readFile(file)
    .then(data => {
        events.emit( 'readFileEditAndwrite', 'the file is read' )
      console.log(data);
    //   let addData1 = data.toString().toUpperCase() ;
    //   console.log ('addData1' , addData1)

      // here the return data will be the original befor edit 
      let addData = JSON.parse(data.toString().toUpperCase()) ;
      console.log( 'with json', addData)
      

      addData.firstName = 'mai';
      addData.married ='yup' ;
      addData.kids = 6 ;
      
      let myInformation = JSON.stringify(addData);
      console.log('new' , myInformation);
      
      fs.writeFile(file , myInformation , cb =>{
        events.emit( 'readFileEditAndwrite', 'the file is written and convert to upper case' )

          console.log( addData);
          // event.emitv( file is read )
      
        return addData;
      }) ;
    })

    .catch(error => { 
        events.emit('error', error)
      });

};
readFileEditAndwrite(file);


module.exports ={ readFileEditAndwrite , readFile};
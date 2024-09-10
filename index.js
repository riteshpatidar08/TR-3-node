// console.log('hello')
// // console.log(window) ;
// // console.log(process) ;

// //NOTE importing in the nodejs using "common js modules"  ...
// // fs module

// const fs = require('fs') ;
// const os = require('os') ;
// const path = require('path')
// //NOTE readFileSync
// //NOTE BLOCKING CODE IN THE NODEJS
// // console.log('reading file started')

// // const data = fs.readFileSync('./index.txt','utf-8')

// // console.log(data)
// // console.log('reading file ended')

// // //NOTE readFile

// // console.log('async file start')

// // //NON BLOCKING
// // fs.readFile('./index.txt', 'utf-8', (err,data)=>{
// // console.log(data)
// // })


// // console.log('async file ended') ;


// // //NOTE writeFile and writeFileSync

// // fs.writeFileSync('./example.txt','hello')

// // fs.writeFile('text.txt','async data', ()=>{
// //     console.log('file created')
// // })

// // //NOTE appendFile , appendFileSync
// // fs.appendFile('index.txt', ' adding using append', ()=>{
// //     console.log('new data added')
// // })

// // fs.renameSync('index.txt','demo.txt')


// //NOTE OPERATING SYSTEM MODULE
// //gives the details about the system where the node js is installed

// console.log(os.hostname()) ;
// console.log(os.cpus()) ;
// console.log(os.totalmem()) ;
// console.log(os.freemem()) ;
// console.log(os.arch()) ;

// //NOTE Path modules

// //NOTE path.dirname

// console.log(path.dirname('C:/Users/baps/Desktop/nodebatchsecond'))


// //NOTE path.baseName

// console.log(path.basename('C:/Users/baps/Desktop/nodebatchsecond/index.js'))

// console.log(path.extname('C:/Users/baps/Desktop/nodebatchsecond/index.js'))

// //NOTE parse method will create an object with key value pair
// console.log(path.parse('C:/Users/baps/Desktop/nodebatchsecond/index.js'))

// //NOTE path.resolve

// console.log(path.resolve('Users','local','bin', 'index.js'))

// console.log(path.join('Users','local','bin', 'index.js'))

// //__dirname , __filename

// console.log(__dirname)
// console.log(__filename)

// const finalPath = path.join(__dirname , 'example.txt')
// fs.readFile(finalPath , 'utf-8', (err,data)=>{
//     console.log(data)
// })


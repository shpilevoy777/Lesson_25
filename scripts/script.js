// .........................task_#1.............................................
// 'use strict'
// const user = {};
// Object.defineProperty(user,'name', {
//     value: 'Igor',
//     writable: false
// });
// Object.defineProperty(user,'age', {
//     value: 30,
//     writable: false
// });
// Object.defineProperty(user,'id', {
//     value: 9379992,
//     writable: false
// });
// console.log(user)

// .........................task_#2.............................................
// let dataBase = {
//     dbUser: 'user',
//     dbType: 'MySQL'
// }
// let configurateDB = {
//     token: '123',
//     password: '567',
//     user: 'admin'
// }

// Object.seal(configurateDB);
// Object.freeze(dataBase);

// // configurateDB.token = '444';
// // delete configurateDB.password
// // console.log(configurateDB)
// // delete dataBase.dbType;
// // dataBase.dbUser = 'Oleh'

// Object.freeze(dataBase);
// console.log(dataBase)

// .........................task_#3.............................................
    let salaries = {
        frontend: 2000,
        backend: 1500,
        design: 1000,
    }
    
    Object.defineProperty(salaries, 'sum', {
        get() {
            let sum = 0;
            for (salary in this) {
                sum += this[salary];
            }
            console.log(sum);
        },
        enumerable: false
    })
    
    Object.defineProperty(salaries, 'addSalaries', {
        set(value) {
            for (let i = 0; i < value.length; i++) {
                let salaryData = value[i].split(':');
                this[salaryData[0]] = salaryData[1];
            }
        }
    })
    
    salaries.addSalaries = ['frontend: 2500', 'backend: 1750', 'design: 1300', 'Manager: 800'];
    console.log(salaries)

// .........................task_#4.............................................
// let user = {
//         name: 'Mike',
//         surname: 'Davis',
//         age: 25,
// }
//         Object.defineProperty(user, 'userInfo', {
//         get (){
//             for(let key in user){
//                 console.log(`${key} : ${user[key]}`)
//             }  
//         } 
// }
// )
// user.userInfo;
// user.login = 'MK_18';
// user.userInfo;





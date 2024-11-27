let input = document.getElementById('input');
let t1 = document.querySelector('#list1');
let t2 = document.querySelector('#list2');
let t3 = document.querySelector('#list3');
let t4 = document.querySelector('#list4');

input.addEventListener('keyup',()=>{
    let pass = input.value;
    // console.log(pass);

    if(pass.length >= 8){
        t1.classList = 'true';
    }
    else{
        t1.classList = 'false';
    }
});
input.addEventListener('keyup',()=>{
    let pass = input.value;
    toString(pass);
    for(let i=0;i<pass.length;i++){
        // console.log(pass[i]);
        if(pass[i] == '@'){
            t4.classList = 'true';
            break;
        }
        else{
            t4.classList = 'false';
        }
    }

});
let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

let flag = 0;
    if(flag!=1){
        input.addEventListener('keyup',()=>{
            let pass = input.value;
             toString(pass);
             for(let i=0;i<pass.length;i++){
                            // console.log(pass[i]);
                            for(let j=0;j<arr.length;i++){
                                if(pass[i] == arr[j]){
                                    t2.classList = 'true';
                                    break;
                                    flag = 1;
                                }
                                else{
                                    t2.classList = 'false';
                                    break;
                            }
                            }
                            flag=1;
                        }
                        flag =1;
                    });
                }
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// input.addEventListener('keyup',()=>{
//     let pass = input.value;
//     toString(pass);
//     let flag = 0;
//     if(flag!=1){
//         for(let i=0;i<pass.length;i++){
//             // console.log(pass[i]);
//             for(let j=0;j<arr.length;i++){
//                 if(pass[i] == arr[j]){
//                     t2.classList = 'true';
//                     break;
//                     flag = 1;
//                 }
//                 else{
//                     t2.classList = 'false';
//                     break;
//             }
//             }
//             flag=1;
//         }
//         flag =1;
//     }
   
// });
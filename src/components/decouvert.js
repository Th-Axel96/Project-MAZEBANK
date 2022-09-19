let currentSold = -101;
let overDraft = -100;

const overdraft = () => {
  if (currentSold < overDraft) {
    console.log("retrait imposible");
  } else {
    console.log("retrait possible");
  }
};
overdraft()

// const test = () => {
//     if (currentSold > overDraft){
//         console.log("decouvert");
//     }else {
//         console.log("pas decouvert");
//     }
// }
// test()

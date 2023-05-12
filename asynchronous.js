//Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
//The function should log the message to the console after the specified delay time.
function school(){
    console.log("I study in AkiraChix")
}
setTimeout(school,3000);
console.log("I will succeed")

//You have an array of user IDs and a function getUserData(id) that returns a Promise with user 
//data when given a user ID. Write an asynchronous function that fetches and logs the data for 
//each user ID one by one, in sequence.
function getUserData(id){
    return new Promise((resolve,reject)=>{
    })
   }
    idnumb=[1,2,3,4,5,6,7,8];
  const fetchData =async ()=>{
      for(let id in idnumb){
                  let data= await userData(id);
                  console.log(data);
              }
  }
  const userData=(id)=>{
      return new Promise(resolve=>{
          setTimeout(()=>{
              resolve(`data for user number ${id}`);
          },2000);
      })
  }
  fetchData()
//You have an asynchronous function performTask() that returns a Promise. The Promise resolves if 
// the task is successful and rejects if there's an error. Write a function that calls performTask() 
// and logs a custom success message if the task is successful, and a custom error message if there's 
// /an error.
function performTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve("This is successfully completed");
        } else {
          reject("Error has occured");
        }
      }, 4000);
    });
  }
  function handleTaskResult() {
    performTask()
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
    handleTaskResult();

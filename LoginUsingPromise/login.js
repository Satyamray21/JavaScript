const users=[
    {name:'user1',password:'user1@123'},
    {name:'user2',password:'user2@123'},
    {name:'user3',password:'user3@123'}
];
const user=(username,password)=>{
    return new Promise((res,rej)=>{
     setTimeout(()=>{
        const fetchUserData=users.find(user=>user.name===username && user.password===password)
        if(fetchUserData)
        {
            res(fetchUserData);
        }
        else
        {
            rej("Invaild userName or Password");
        }
     },15000);
    });
};
const handleEvent = async(event)=>{
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
     try
     {
        await user(username,password);
        message.innerText="Login Successfull";
     }
     catch(error)
     {
        message.innerText="Login UnScussessfull" + error;
     }

};
document.getElementById('btn').addEventListener('click',handleEvent);

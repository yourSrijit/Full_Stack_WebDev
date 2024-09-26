const fetchData=async()=>{
    try{
        const response=await fetch("https://dummyjson.com/users")
        const data=await response.json();
        return data.users;
    }catch(error){
        console.log("Something went wrong");
        
    }
}

const Serverfetch=async()=>{
    const data=await fetchData();
     
    <div>
        Serverside
        <ui>
        { data && data.length >0 &&
            data.map((user)=>{

                <li>{user.firstName}</li>
            }) 
        }
        </ui>
    </div>
}
export default Serverfetch
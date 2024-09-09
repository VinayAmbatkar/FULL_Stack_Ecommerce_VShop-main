import axios from "axios";


export const fetchDataFromApi=async(url)=>{
    try{
        const {data} = await axios.get("http://localhost:4000"+url)
        return data ;
    }
    catch(error){
        console.log(error);
        return error;
    }
}


//post

export const postData = async (url,formData )=>{
    const {res} = await axios.post("http://localhost:4000" + url,formData)
    return res ;
}

//edit data
export const editData = async (url,updateData )=>{
    const {res} = await axios.put("http://localhost:4000" + url,updateData )
    return res ;
}


//delete the  Catlist
export const deleteData = async (url,id )=>{
    const {res} = await axios.delete(`http://localhost:4000${url}`)
    return res ;
}
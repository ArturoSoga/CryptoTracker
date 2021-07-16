class Http{
    static instance = new Http();

    //********************* */
    get = async (url) =>{
        try{
            
            let req = await fetch(url);
            let json = req.json();
            return json;

        }catch(err){
            console.log("error get method: "+err);
            throw Error(err);
        }
    }

    //********************* */

    post = async (url,body) =>{
        try{ 
            let req = await fetch(url,{
                method: "POST",
                body
            });

            let json = await req.json();

            return json;

        }catch(err){
            console.log("error post method: "+err);
            throw Error(err);
        }
    }

}

export default Http;
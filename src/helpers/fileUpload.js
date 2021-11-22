
export const fileUpload = async ( file ) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/ricardolml/upload'; //your url

    const formData = new FormData();
    formData.append('upload_preset','react-journal'); //your data
    formData.append('file',file);

    try{
        const resp = await fetch( cloudUrl ,{
            method: 'POST',
            body: formData
        } );

        if( resp.ok ){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            console.log('hola perros')
            throw await resp.json();
        }
    }catch( error ){        
        throw error;
    }
}
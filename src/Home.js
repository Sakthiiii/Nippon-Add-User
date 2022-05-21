import React, { useEffect, useState } from 'react';
import { getSuggestion } from './api';



const Home = () => {

  
    const [inputlist,setInputList] =useState([{fisrtName:'',lastName:''}]);
    const [searchfield,setSearchfeild] =useState('');
    const [suggestions,setSuggesions]=useState([]);
    const [skipsuggestion,setSkipSuggestion]=useState(false)

    useEffect(()=>{
        if(searchfield ===''|| skipsuggestion) return;
    getSuggestion(searchfield).then((foundsuggestions)=>(
        setSuggesions(foundsuggestions)
))
    },[searchfield,skipsuggestion])

    const hasSuggestion =suggestions.length >0 ;
   
    const handleaddClick =() =>{
        setInputList([...inputlist,{fisrtName:'',lastName:''}])
    }

    const handleinputChange =(e) =>{
        setSkipSuggestion(false);
        const input = e.target.value ;
        if(input===''){
            setSuggesions([]);
        }
        setSearchfeild(input);
        
    }
const suggestionClicked =() =>{
    setSkipSuggestion(true);
    setSearchfeild(suggestions);
    setSuggesions([])
}
 const handleDelete = index =>{
    const list =[...inputlist]
    list.splice(index,1);
    setInputList(list);

}
    //
  return (
      
   <React.Fragment>
       
       <section class="hierarchy_canvas">
        <div class="container-fluid">
            <div class="m-5">
                <div class="hierarchy_form row justify-content-center">
                    <div class="state col-sm-6 col-md-4 col-lg-4">
                        <input type="text" name="state" id="hierar_state" class="form-control text-center bg-none" placeholder="Enter State"/>
                    </div>
                </div>
               

                <ul class="org-structure vertical justify-content-center">
                    <li class="hierarchy_form">
               
                        <div class="card shadow-sm">
                            <div class="card-body">
                                
                                <input type="text" name="name" class="form-control bg-none" placeholder="General Manager"  onChange={e=>handleinputChange(e)} />
                                <input type="text" name="name" class="form-control bg-none" 
                                placeholder="Enter Name" value={searchfield}  onChange={handleinputChange} />
                                  
                                  {hasSuggestion && (
                                    <div className='suggestions'>

                               {suggestions.map((suggestion)=>{
                                  return  <div 
                                  onClick={()=>suggestionClicked(suggestion)}
                                  className='suggestion' key={suggestion}>{suggestion}</div>
                               })}
                               </div>
                              )}
                            </div>
                           
                            <div class="card-footer">
                                <div class="d-flex justify-content-between">
                                    <button type="button" class="btn btn-outline-danger btn-sm rounded-pill" onClick={()=>handleDelete()}><span class="material-icons-outlined"> delete </span></button>
                                    <div class="d-flex flex-nowrap">
                                        <button type="button" class="btn btn-outline-success btn-sm rounded-pill"><span class="material-icons-outlined" onClick={()=>{handleaddClick()}}> person_add_alt </span></button>
                                        {/* <div class="dropdown">
                                            <button type="button" class="btn btn-outline-info btn-sm rounded-pill ml-2 dropdown-toggle btn-dropdown" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="false"><span class="material-icons-outlined"> more_vert </span></button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                <button class="dropdown-item" type="button">Geo Location</button>
                                                <button class="dropdown-item" type="button">Nippon Lable</button>
                                                <button class="dropdown-item" type="button">Dealer code</button>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <ul>

                           
                            <li>
                            {inputlist.map((x,i) =>{ 
                    return (
                                <div class="card shadow-sm">
                                    <div class="card-body">
                                        <input type="text" name="name" class="form-control bg-none" placeholder="Primary" onChange={e=>handleinputChange(e)}/>
                                        <input type="text" name="name" class="form-control bg-none mt-2" placeholder="Enter name"   />
                                    </div>
                                    <div class="card-footer">
                                        <div class="d-flex justify-content-between">
                                            <button type="button" class="btn btn-outline-danger btn-sm rounded-pill"><span class="material-icons-outlined" onClick={()=>handleDelete(i)}> delete </span></button>
                                            <div class="d-flex flex-nowrap">
                                                <button type="button" class="btn btn-outline-success btn-sm rounded-pill"><span class="material-icons-outlined" onClick={()=>{handleaddClick()}}> person_add_alt </span></button>
                                                {/* <div class="dropdown">
                                                    <button type="button" class="btn btn-outline-info btn-sm rounded-pill ml-2 dropdown-toggle btn-dropdown" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="false"><span class="material-icons-outlined"> more_vert </span></button>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                                        <button class="dropdown-item" type="button">Geo Location</button>
                                                        <button class="dropdown-item" type="button">Nippon Lable</button>
                                                        <button class="dropdown-item" type="button">Dealer code</button>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    );
                                }  ) }    
                            </li>
                        
                           
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>

   </React.Fragment>
  )
}

export default Home
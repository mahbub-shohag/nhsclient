import axios from 'axios';
// import Loader from '../commonpages/Loader';
import React,{useEffect,useState} from 'react'
// import Select from "react-dropdown-select";
import SurveyList from './SurveyList';
function Survey() {
    const [loading,setLoading] = useState(true);
    const [surveyList,setSurveyList] = useState([]);
    const { REACT_APP_URL} = process.env;
    
    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
    };

    useEffect(() => {
        (async () => {
            var bodyFormData = new FormData();
            axios({
                method: "get",
                url: REACT_APP_URL+`survey/get-list`,
                data:bodyFormData,
                headers: { "Content-Type": "application/json" },
              })
                .then(function (response) {
                  setSurveyList(response.data[0].results);
                })
                .catch(function (response) {
                  //handle error
                  console.log("**",response.data);
                });             
        })();
        }, []);

        // if(loading){
        //     return (<Loader/>)        
        // } 

  return (
    <div className="container-fluid">
            <div>
            <div className="card">
            <div className="card-body">
                <SurveyList surveyList={surveyList}/>
            </div>
            </div>
        </div>
      </div>
  )
}
export default Survey;
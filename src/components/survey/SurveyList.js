import React from 'react'
import { Link } from 'react-router-dom';

function SurveyList(props:any) {
    const dataToPass = { name: 'John Doe', age: 25 };
    const {surveyList} = props;
    let surveyListRows = [];
    let isqc;
    surveyList.map((survey, index) => (
        surveyListRows.push(<tr key={index}>
            {/* <td><Link to={{ pathname: '/survey-detail', state: 1 }}>view</Link></td> */}
            <td><Link to="/survey-detail" state={{data : survey}}>Go</Link></td>
            <td>{index+1}</td>
            <td>{survey.PSU}</td>
            <td>{survey.HH_CODE}</td>
            <td>{survey.MEM_INFO[0].name}</td>
        </tr>)
        
    ))


  return (
    <div>
        <table className="table table-striped table-hover table-sm table-rftc">
                <thead>
                    <tr>
                    <th>View</th>    
                    <th>SL</th>
                    <th>PSU</th>
                    <th>HH</th>
                    <th>HH Head</th>
                    </tr>
                </thead>
                <tbody>
                   {surveyListRows}
                </tbody>
                
            </table>
    </div>
  )
}
export default SurveyList;
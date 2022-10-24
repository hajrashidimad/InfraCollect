import React, {useState, useEffect} from 'react'

const car_longer_avg = 3;
const time_for_one_car = 3;
const agent_salary_avg_ph_euro = 18;
const agent_salary_avg_pm_euro = agent_salary_avg_ph_euro/60;
const coefficient_of_eco = 0.5;
const start_cost = 50;

const Mession_1 = ({isShowing}) => {

  const [state, setState] = useState({area : '', time : '', date : ''});

  let state_area = state.area

  
  function costCalculate(state_area, car_longer_avg, time_for_one_car,agent_salary_avg_pm_euro, coefficient_of_eco){
    let resault = ((state_area/car_longer_avg)* time_for_one_car * agent_salary_avg_pm_euro * coefficient_of_eco) + start_cost ;
    return resault;
  }

  function handelAreaChange(e){
    setState({...state, area : e.target.value});
  }
  function handelTimeChange(e){
    setState({...state, time : e.target.value});
  }
  function handelDateChange(e){
    setState({...state, date : e.target.value});
  }

  return (
    isShowing &&
      <div className="car-plaques-scanner">
        <div className="container">
          <form className="car-scanner-form">
            <div class="input-group mb-3 mt-4">
              <span className="input-group-text">Enter the area coordinates (Metre) :</span>
              <input type="text" value={state.area} onChange={handelAreaChange} className="form-control" id="area" name="area"  placeholder ={'Ex: 278m'}/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Enter estimated time (Minute) :</span>
              <input type="text" value={state.time} onChange={handelTimeChange} className="form-control" id="time" name="time" placeholder ={'Ex: 50min'}/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Enter the date (dd/mm/yy) :</span>
              <input type="text" value={state.date} onChange={handelDateChange} className="form-control" id="area" name="area"
                data-bs-toggle="body" title="This is an estimation" data-bs-content="To get more inormation please contact us !"
                placeholder ={'Ex: 01/01/2023'}/>
            </div>
            <button type="submit" onClick={costCalculate} className="btn btn-warning  btn-outline-dark">GET MY OFFERT !!</button>
          </form>

          <p className="Resault"><h3 id='cost'>Total Cost : {}€/session</h3></p>
        </div>
      </div>
    
  )
}

export default Mession_1
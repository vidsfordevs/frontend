import React from 'react'
// import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
  

  
  return (
    <div>
        <div className='header'>
          <h1>user dashborad</h1>
          <div className='row'>
            <div className='col-md-3 col-sm col-xl'>
                <div className='card'>
                  <div className='card-body'>
                    <h2 className='card-title' >vids for devs</h2>

                  </div>

                </div>
                <div className='col'>
                <div className='card'>
                  <div className='card-body'>
                    <h4 className='card-title' > As time</h4>
                    <h1>486</h1>
                    <p>Question Asked</p>

                  </div>

                </div>
            </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h4 className='card-title' >  New Question weakly</h4>
                    <img  className='img-fluid' style={{width:'150%'}} src='https://media.geeksforgeeks.org/wp-content/uploads/20210707115650/linechart.png'></img>
                    

                  </div>

                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h4 className='card-title' >  New Question weakly</h4>
                    <img  className='img-fluid' style={{width:'150%'}} src='https://media.geeksforgeeks.org/wp-content/uploads/20210707115650/linechart.png'></img>

                  </div>

                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                  <div className='card-body'>
                    <h4 className='card-title' >  New Question weakly</h4>
                    <img  className='img-fluid' style={{width:'150%'}} src='https://media.geeksforgeeks.org/wp-content/uploads/20210707115650/linechart.png'></img>

                  </div>

                </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default UserDashboard;
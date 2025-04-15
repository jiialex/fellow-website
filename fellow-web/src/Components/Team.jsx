import '../Styles/team.css'


function Teams() {
    return (
      <div className='team'>
        <h1>Teams Found</h1>
        <h6>click on the team you want to join</h6>
        <div className='list-container'>
          <div className='list left'>
            <h4>Teams Found in Focus</h4>
            
            <ul>
              <li><a href="volunter" target="__blank">Volunteer</a></li>
              <li><a href="hilasmos" target="__blank">Hilasmos</a></li>
              <li><a href="art" target="__blank">Art and Literature</a></li>
              <li><a href="mbc" target="__blank">MBC (Mission of Bible Study)</a></li>
              <li><a href="prayer" target="__blank">Prayer</a></li>
              <li><a href="fundraising" target="__blank">Fund Raising</a></li>
              <li><a href="council" target="__blank">Council</a></li>
              <li><a href="natanims" target="__blank">Natanims</a></li>
            </ul>
          </div>
  
          <div className='list right'>
            <h4>Teams Found in Evasue</h4>
            <ul>
              <li><a href="worship" target="__blank">Worship</a></li>
              <li><a href="action" target="__blank">Action Team</a></li>
              <li><a href="prayer" target="__blank">Worship</a></li>
              <li><a href="natanims" target="__blank">Natanims</a></li>
              <li><a href="ahava" target="__blank">Ahavah</a></li>
              <li><a href="ahava" target="__blank">pure love</a></li>
              <li><a href="ahava" target="__blank">prayers</a></li>
              <li><a href="ahava" target="__blank">counciling</a></li>
              <li><a href="ahava" target="__blank">new generation</a></li>

            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  
   
  export default Teams;
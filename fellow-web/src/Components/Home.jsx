import React from 'react'
import '../Styles/home.css'
import evasue from './images/evasue.png'
import focus from './images/focus.png'

function Home() {
    return (
        <div className='Home' >
      <div className="fellow">
        <div className="head">
          <h3>Evasue and Focus</h3>
          <div className="images">
            <img src={evasue} alt="Evasue Fellowship" className="evasue" />
            <img src={focus} alt="Focus Fellowship" className="focus" />
          </div>
          <p>
            Jit fellowship of Christians grows in Christ and worships the Lord together. 
            <br />
            <strong>Evasue</strong> is a fellowship of those who worship God in Amharic, while <br />
            <strong>Focus</strong> is a fellowship for those who worship in Oromic.
            <br />
            Despite the difference in language, we worship one God and share a single mission:<br />
            <strong>to proclaim the truth and declare Jesus Christ to the world.</strong>
          </p>
  
          <div>
            <h5>Matthew 10 </h5>
            <p>
              ¹ And when he had called unto him his twelve disciples, he gave them power
              against unclean spirits, <br />to cast them out, and to heal all manner of sickness 
              and all manner of disease.
              <br /><br />
              ⁶ But go rather to the lost sheep of the house of Israel.
              <br />
              ⁷ And as ye go, preach, saying, <strong>The kingdom of heaven is at hand.</strong>
              <br />
              ⁸ Heal the sick, cleanse the lepers, raise the dead, cast out devils:
              <strong>freely ye have received, freely give.</strong>
            </p>
          </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  

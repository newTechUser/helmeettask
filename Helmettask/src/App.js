import { Helmet } from 'react-helmet';

import { Contactall } from './Contactall';


function App() {

  return (
    <div className="App">

      <Helmet>
        <meta name="description" content='React Application'/>
        <title>Home Page</title>

        
      </Helmet>    
      <Contactall/>
    </div>
  );
}

export default App;

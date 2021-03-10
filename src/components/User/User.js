import React from 'react';

const User = (props) => {
      const friend = props.friend;
      // JS Ternary Operator
      const greetings = friend ? <p>Welcome Home Friend</p> : <p>Who The Hell Are You?</p>
      // const greetings = <p>Welcome Home Friend</p>
      const food = friend ? <p>I Will Treat You</p> :<p>His His Whose Whose</p>
      const connection = friend? <p>Let's Connect on Linked In</p> :<p>I Don't Even Know Who You Are</p>
      return (
            <div>
                  <div>
                        <h3>Bon Jour</h3>
                        { greetings}
                  </div>
                  <div>
                        <h3>Food</h3>
                        {food}
                  </div>
                  <div>
                        <h3>Connection</h3>
                        {connection}
                  </div>
            </div>
      );
};

export default User;
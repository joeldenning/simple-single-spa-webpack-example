import * as React from 'react';

export default class Root extends React.Component<any,any> {
  render() {
    const message: string = "This was rendered by app 1 which was written in React";

    return (
        <div style={{marginTop: '100px'}}>
          {message}
        </div>
    );
  }
}

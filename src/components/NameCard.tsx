import React from 'react';

export interface Props {
  name: string;
}

export interface State {
  name: string;
  old: number;
  test: number[];
}

export class NameCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { name: 'default', old: 12, test: [1, 2, 3, 4, 5] };
    // this.doSomething = this.doSomething.bind(this);
  }

  componentDidMount() {
    this.setState({ name: this.props.name, old: 29, test: [1, 2, 3, 4, 5] });
    // tslint:disable-next-line:no-console
    console.log(this.props);
  }

  doSomething = () => {
    const name = this.props.name;
    alert(`hello ${name}`);
  };

  // items = () => {
  //   // tslint:disable-next-line:no-console
  //   console.log(this.state.test);
  //   return this.state.test.map(x => (<li key={x.toString()}>{x}</li>));
  // };

  render() {
    return (
      <div>
        this is {this.state.name}, and he is 
        <button onClick={this.doSomething}>{this.state.old}</button> years old.
        <br />
        <ul>{this.state.test.map(x => (<li key={x.toString()}>{x}</li>))}</ul>
      </div>
    );
  }
}

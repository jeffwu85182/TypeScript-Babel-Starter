import * as React from 'react';
import './Hello.css';
import { NameCard } from './NameCard';
// import { Form } from './form';
import Calculator from './Calculator';

export interface Props {
  languageName: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export class Hello extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    // tslint:disable-next-line:no-console
    console.log(Calculator)
  }

  render() {
    const {
      languageName,
      enthusiasmLevel = 1,
      onIncrement,
      onDecrement
    } = this.props;
    // tslint:disable-next-line:no-console
    console.log(languageName);
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
      <div className="hello">
        <img src={'logo.svg'} />
        <div className="greeting">
          Hello {languageName + getExclamationMarks(enthusiasmLevel)}
        </div>
        <NameCard name="jeff" />
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
        {/* <Form name={'kevin'} /> */}
        <Calculator />
      </div>
    );
  }
}

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

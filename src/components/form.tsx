import React from 'react';

export interface FormProps {
  name: string;
}

export class Form extends React.Component<FormProps, { name: string }> {
  constructor(props: FormProps) {
    super(props);
    this.state = { name: props.name };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // tslint:disable-next-line:no-console
    console.log(`changed`, event);
    this.setState({ name: event.target.value.toUpperCase() });
  }

  handleSubmit(event: React.FormEvent) {
    alert(`A name was submitted: ${this.state.name}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

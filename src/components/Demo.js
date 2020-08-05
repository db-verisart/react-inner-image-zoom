import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './demo.css';

class Demo extends Component {
  constructor (props) {
    super(props);

    this.state = {
      showCode: false,
      isCopied: false
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showCode: !prevState.showCode
    }));
  }

  handleCopy = () => {
    this.setState({
      isCopied: true
    }, () => {
      setTimeout(() => {
        this.setState({
          isCopied: false
        })
      }, 2000);
    });
  }

  render () {
    const {
      name,
      children,
      notes,
      code
    } = this.props;

    return(
      <div className="demo">
        <div className="demo__main">
          <h3 className="demo__heading">{name}</h3>

          <div className="demo__content">
            <div className="demo__example">{children}</div>

            <div className="demo__notes">
              <h4 className="demo__notes-heading">Notes:</h4>
              <ul className="demo__notes-list">
                {notes.map((note, i) => {
                  return(
                    <li key={i} dangerouslySetInnerHTML={{__html: note}}></li>
                  );
                })}
              </ul>
              <button
                className="demo__code-btn"
                onClick={this.handleClick}
                aria-expanded={this.state.showCode}
                aria-controls={`${this.props.name.replace(/ /g, '')}Code`}
              >
                {this.state.showCode ? 'Hide Code -' : 'Show Code +'}
              </button>
            </div>
          </div>
        </div>

        {this.state.showCode &&
          <pre className="demo__code" id={`${this.props.name.replace(/ /g, '')}Code`}>
            <CopyToClipboard text={code} onCopy={this.handleCopy}>
              <button className="demo__code-copy demo__code-btn">{`Cop${this.state.isCopied ? 'ied!' : 'y'}`}</button>
            </CopyToClipboard>

            <code>{code}</code>
          </pre>
        }
      </div>
    );
  }
}

Demo.propTypes = {
  name: PropTypes.string,
  children: PropTypes.element,
  notes: PropTypes.array,
  code: PropTypes.string
};

export default Demo;
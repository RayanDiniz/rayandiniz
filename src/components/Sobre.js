import React, {useState, useCallback} from 'react';
import { Collapse } from 'react-collapse';

export default function Sobre() {
  const height = 100;

  const accessibilityIds = {
    checkbox: 'accessible-marker-example1',
    button: 'accessible-marker-example2'
  };

  const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);

  const onClick = useCallback(
    () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
    [isButtonCollapseOpen]
  );

  return (
    <div className="sobre">
      <div className="config">
        <button
          className="App-btn"
          aria-controls={accessibilityIds.button}
          aria-expanded={isButtonCollapseOpen}
          onClick={onClick}
          type="button">
          Sobre
        </button>
      </div>
      <Collapse
        isOpened={isButtonCollapseOpen}>
        <div style={{height}} id={accessibilityIds.button} className="blob">
          ola
        </div>
      </Collapse>
    </div>
  );
}
// test/pages/index.test.js

import React from 'react';
import { filmState } from '../../recoil/atoms/filmsAtom';

// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen, RecoilObserver, fireEvent } from '../../test-utils';
import AddFilm from './index';

describe('Add Film component', () => {
  it('should handle adding', () => {
    const onChange = jest.fn();
    render(
      <>
        <RecoilObserver onChange={onChange} node={filmState} />
        <AddFilm />
      </>
    );
    
    const input = screen.getByPlaceholderText(/New Film/i);
    const button = screen.getByRole('button', {
      name: /add a film/i
    });
    fireEvent.change(input, {target: {value: 'test123'}});
    fireEvent.click(button);


    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith([]); // Initial state on render.
    expect(onChange).toHaveBeenCalledWith(['test123']); // New value on change.
  });
});

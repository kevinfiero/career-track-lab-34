import React from 'react';
import { render, cleanup, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('test for color selection', async() => {
    render(<App />);

    const colorInput = await screen.findByAltText('Color Picker');

    fireEvent.change(colorInput, {
      target: {
        value: '#00FF00'
      }
    });

    const display = await screen.findByTestId('Color Result');
    console.log(display.style.backgroundColor);
    
    expect(display).toHaveStyle({
      backgroundColor: '#00FF00'

    });
  });

  it('test for undo selection', async() => {
    render(<App />);

    const undoInput = await screen.findByText('undo');
    const colorInput = await screen.findByAltText('Color Picker');

    fireEvent.change(colorInput, {
      target: {
        value: '#00FF00'
      }
    });

    fireEvent.click(undoInput);

    const display = await screen.findByTestId('Color Result');
    console.log(display.style.backgroundColor);

    expect(display).toHaveStyle({
      backgroundColor: '#FF0000'

    });
  });

  it('test for redo selection', async() => {
    render(<App />);

    const undoInput = await screen.findByText('undo');
    const redoInput = await screen.findByText('redo');
    const colorInput = await screen.findByAltText('Color Picker');

    fireEvent.change(colorInput, {
      target: {
        value: '#00FF00'
      }
    });

    fireEvent.click(undoInput);
    fireEvent.click(redoInput);

    const display = await screen.findByTestId('Color Result');

    console.log(display.style.backgroundColor);

    expect(display).toHaveStyle({
      backgroundColor: '#00FF00'
    });
  });





});

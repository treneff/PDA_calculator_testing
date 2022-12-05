import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
    let container;
    beforeEach(() => {
        container = render(<Calculator />);
    });

    it('should change running total on number enter', () => {
        const button4 = container.getByTestId('number4');
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button4);
        expect(runningTotal.textContent).toEqual('4');
    });

    it('should be able to add numbers', () => {
        const button4 = container.getByTestId('number4');
        const button1 = container.getByTestId('number1');
        const operatorAdd = container.getByTestId('operator-add')
        const operatorEqual = container.getByTestId('operator-equals')
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button1);
        fireEvent.click(operatorAdd)
        fireEvent.click(button4)
        fireEvent.click(operatorEqual)
        expect(runningTotal.textContent).toEqual('5');
    });
    it('should be able to subtract numbers', () => {
        const button7 = container.getByTestId('number7');
        const button4 = container.getByTestId('number4');
        const operatorSubtract = container.getByTestId('operator-subtract')
        const operatorEqual = container.getByTestId('operator-equals')
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button7);
        fireEvent.click(operatorSubtract)
        fireEvent.click(button4)
        fireEvent.click(operatorEqual)
        expect(runningTotal.textContent).toEqual('3');
    });
    it('should be able to multiply numbers', () => {
        const button3 = container.getByTestId('number3');
        const button5 = container.getByTestId('number5');
        const operatorMultiply = container.getByTestId('operator-multiply')
        const operatorEqual = container.getByTestId('operator-equals')
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button3);
        fireEvent.click(operatorMultiply)
        fireEvent.click(button5)
        fireEvent.click(operatorEqual)
        expect(runningTotal.textContent).toEqual('15');
    });
    it('should be able to divide numbers', () => {
        const button2 = container.getByTestId('number2');
        const button1 = container.getByTestId('number1');
        const button7 = container.getByTestId('number7');
        const operatorDivide = container.getByTestId('operator-divide')
        const operatorEqual = container.getByTestId('operator-equals')
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button2);
        fireEvent.click(button1);
        fireEvent.click(operatorDivide)
        fireEvent.click(button7)
        fireEvent.click(operatorEqual)
        expect(runningTotal.textContent).toEqual('3');
    });
    it('should be able to concatenate numbers', () => {
        const button2 = container.getByTestId('number2');
        const button1 = container.getByTestId('number1');
        const button7 = container.getByTestId('number7');
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button2);
        fireEvent.click(button1);
        fireEvent.click(button7)
        expect(runningTotal.textContent).toEqual('217');
    });
    it('should be able to perform multiple operations', () => {
        const button2 = container.getByTestId('number2');
        const button1 = container.getByTestId('number1');
        const button7 = container.getByTestId('number7');
        const operatorAdd = container.getByTestId('operator-add')
        const operatorSubtract = container.getByTestId('operator-subtract')
        const operatorEqual = container.getByTestId('operator-equals')
        const runningTotal = container.getByTestId('running-total');
        fireEvent.click(button7);
        fireEvent.click(operatorAdd)
        fireEvent.click(button1);
        fireEvent.click(operatorEqual)
        fireEvent.click(operatorSubtract)
        fireEvent.click(button2)
        fireEvent.click(operatorEqual)
        expect(runningTotal.textContent).toEqual('6');
    });
    it('should be able clear without resetting equal', () => {
        const button2 = container.getByTestId('number2');
        const button1 = container.getByTestId('number1');
        const button7 = container.getByTestId('number7');
        const operatorAdd = container.getByTestId('operator-add')
        const operatorSubtract = container.getByTestId('operator-subtract')
        const operatorEqual = container.getByTestId('operator-equals')
        const runningTotal = container.getByTestId('running-total');
        const clear = container.getByTestId('clear')
        fireEvent.click(button7);
        fireEvent.click(operatorAdd)
        fireEvent.click(button1);
        fireEvent.click(operatorEqual)
        fireEvent.click(clear)
        fireEvent.click(operatorSubtract)
        fireEvent.click(button2)
        fireEvent.click(operatorEqual)
        expect(runningTotal.textContent).toEqual('6');
    });
});

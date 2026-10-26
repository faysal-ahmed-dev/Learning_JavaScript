import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suit: formatCurrancy()', () => {
    it('(4095) => "40.95" ->', () => {
        expect(formatCurrency(4095)).toEqual('40.95');
    });

    it('(0) => "0.00" ->', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('(2000.5) => "20.01" ->', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

});
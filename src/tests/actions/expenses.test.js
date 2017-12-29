import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('i would like it to set up remove expense action object', () => {
    const result = removeExpense({ id: '123abc' });
    expect(result).toEqual({
        expense: {id: '123abc'},
        type: 'REMOVE_EXPENSE',
    });
});

test('i would like it to set up edit expense action object', () => { 
    const result = editExpense('123abc', { note: "test" });
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { note: "test" }
    });
});

test('i would like it to set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }       
    });

});

test('i would like it to set up add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    }
    );
});
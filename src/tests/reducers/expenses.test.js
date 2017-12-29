import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('i would like it to set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('I would like it to remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: expenses[1].id
        }    
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('I would like it to not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '-1'
        }    
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

// add an expense
test('I would like it to add an expense', () => {
    const expenseToAdd = {
        description: 'Added Expense',
        note: '',
        amount: 1123,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseToAdd
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expenseToAdd]);
});

// edit an expense

test('I would like it to edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note: 'Modified note'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toEqual(action.updates.note);
});

// not edit an expense if expense not found

test('I would like it to not edit an expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note: 'Modified note'
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

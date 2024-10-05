const INCREMENT = 'INCREMENT'

// state declarations
const InitialCounterState = {
    count: 0,
}

const InitialUsersState = {
    users: [{
        name: 'John',
    }],
}

// actions|| 2 things have one type and another payload
// Increment the counter
const IncrementCounter = () => {
    return {
        type: INCREMENT,
    }
}
// Decrement the counter




export const ADD_TODO = text => ({
    type: 'ADD_TODO',
    data: new Date().toISOString().length,
    text
})

export const CHANGE_TODO = text => ({
    type: 'CHANGE_TODO',
    text
})
export const ON_REDACT = onRedact => ({
    type: 'REDACT',
    onRedact
})

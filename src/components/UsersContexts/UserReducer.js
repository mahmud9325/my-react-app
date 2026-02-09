export const initialState = {
    userName: [
        { id: 1, name: 'Mahmudul Hoque Maruf' },
        { id: 2, name: 'Jannnatun Nahar Esha' },
        { id: 3, name: 'Kamrun Nahar Maya' }
    ]
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD DATA":
            return {
                ...state,
                userName: [...state.userName, action.payload]
            };

        case "REMOVE DATA":
            const filterData = state.userName.filter((userData) => userData.id !== action.payload)
            return {
                ...state,
                userName: filterData,
            }


        default:
            return state;
    }

}
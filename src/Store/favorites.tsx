import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import TicketInfo from "../Interface/TicketInfo";
import {Unit} from "../Interface/Unit";

const initialState: TicketInfo = {
    domo: "",
    units: []
};

export const slice = createSlice({
    name: "ticket",
    initialState,
    reducers: {
        cleanDetails: (state: TicketInfo) => {
            state = {...initialState};
        },
        getDetails: (state: TicketInfo, action: PayloadAction<{ id: string }>) => {
            const id = action.payload.id;
            const data = mock.filter(data => data.domo === id);
            if(data.length) {
                state.domo = data[0].domo;
                if(data[0].units.length){
                    const units: Unit[] = [];
                    for(let i = 0; i < data[0].units.length; i++){
                        units.push(data[0].units[i]);
                    }
                    state.units = units;
                }
            }
        }
    },
});

export const {cleanDetails, getDetails} = slice.actions;

interface State {
  ticket: TicketInfo
}

export const ticketDetailDomo = (state: State) => state.ticket.domo;
export const ticketDetailUnits = (state: State) => state.ticket.units;

export default slice.reducer;

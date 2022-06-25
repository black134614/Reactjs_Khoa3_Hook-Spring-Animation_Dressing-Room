import { change_Animation, change_Clothes } from "../types/type";

const initialState = {
    activeClothes: {
        hairstyle: '/images/hairstyle/hairstyle3.png',
        necklaces: '/images/necklaces/necklace3.png',
        topclothes: '/images/clothes/topcloth5.png',
        botclothes: '/images/clothes/botcloth4.png',
        handbags: '/images/handbags/handbag2.png',
        shoes: '/images/shoes/shoes2.png',
        background: '/images/background/background1.jpg'
    },
    isChange: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case change_Clothes: {
            const updateActiveClothes = { ...state.activeClothes };
            //find type item in state and change it src if it exist
            if (Object.keys(updateActiveClothes).findIndex(name => name === action.item.type) !== -1) {
                updateActiveClothes[action.item.type] = action.item.imgSrc_png;
            }
            state.activeClothes = updateActiveClothes;
            //reset state for animation
            state.isChange = false;
            return { ...state }
        }
        case change_Animation:{
            return {...state, isChange: !state.isChange}
        }
        default:
            return state
    }
}

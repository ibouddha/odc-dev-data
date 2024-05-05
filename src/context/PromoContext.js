import { getPromos } from '@/db/fetchdata';
import { createContext, useEffect, useReducer } from 'react';

export const PromoContext = createContext();

export const PromoContextProvider = ({ children }) => {

    const getLastPromo = async () => {
        const promos = await getPromos();
        if(promos){
            const lastPromo = promos[0];
            return lastPromo;
        }
        
    }


    const INITIAL_STATE = {
        promo: null,
    }

    useEffect(() => {
        getLastPromo().then(res => promoDispatch({ type: "CHANGE_PROMO", payload: res }));
    }, [])




    const promoReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_PROMO":
                return { ...state, promo: action.payload };
            default:
                return state;
        }
    }

    const [promoState, promoDispatch] = useReducer(promoReducer, INITIAL_STATE);

    return (
        <PromoContext.Provider value={{ data:promoState, dispatch:promoDispatch }}>
            {children}
        </PromoContext.Provider>
    )
}

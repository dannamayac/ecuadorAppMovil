import React, { createContext, useContext, useState } from 'react';

const CobroContext = createContext();

export const CobroProvider = ({ children }) => {
    const [data, setData] = useState([
        {
            id: 1,
            unit: '23452',
            title: 'Pedro Panadería',
            quotaValue: '$50.00',
            amountPending: '$10.00 - 3/10',
            lastPaymentAmount: '$40.00',
            lastPaymentDate: '03/06/2023',
            nextPaymentDate: '03/06/2023',
            daysLate: 0,
        },
        {
            id: 2,
            unit: '23453',
            title: 'Laura Peluquería',
            quotaValue: '$10.00',
            amountPending: '$70.00 - 2.5/10',
            lastPaymentAmount: '$30.00',
            lastPaymentDate: '03/06/2023',
            nextPaymentDate: '03/06/2023',
            daysLate: 2,
        },
    ]);

    const handleUpdateCobro = (title, cobroHour, paid = false, notPaid = false) => {
        let updatedItem;
        const updatedData = data
            .map(item => {
                if (item.title === title) {
                    if (paid) {
                        // Mark as paid
                        updatedItem = { ...item, paid: true };
                        return null; // Remove the item from its current position
                    } else if (notPaid) {
                        // Mark as not paid
                        updatedItem = { ...item, notPaid: true };
                        return null; // Remove the item from its current position
                    } else {
                        updatedItem = { ...item, inCobro: true, cobroHour };
                        return null; // Remove the item from su current position
                    }
                }
                return item;
            })
            .filter(item => item !== null);

        if (updatedItem && !updatedItem.paid && !updatedItem.notPaid) {
            updatedData.push(updatedItem); // Add the updated item to the end if not paid or not paid
        }

        setData(updatedData);
    };

    return (
        <CobroContext.Provider value={{ data, handleUpdateCobro }}>
            {children}
        </CobroContext.Provider>
    );
};

export const useCobro = () => useContext(CobroContext);
import React, { createContext, useState, useContext } from 'react';

const SalesContext = createContext();

export const useSales = () => {
    return useContext(SalesContext);
};

export const SalesProvider = ({ children }) => {
    const [salesData, setSalesData] = useState([
        { id: '1', customer: 'Cliente 1', date: '2023-05-08', sale: 'Venta 1', status: 'En espera' },
        { id: '2', customer: 'Cliente 2', date: '2023-05-09', sale: 'Venta 2', status: 'En espera' },
        { id: '3', customer: 'Cliente 3', date: '2023-05-10', sale: 'Venta 3', status: 'Rechazada' }
    ]);
    const [salesDataApproved, setSalesDataApproved] = useState([
        { id: '4', customer: 'Cliente 4', date: '2023-05-11', sale: 'Venta 4', status: 'Aprobada' },
        { id: '5', customer: 'Cliente 5', date: '2023-05-12', sale: 'Venta 5', status: 'Aprobada' }
    ]);

    const addSale = (newSale) => {
        if (newSale.status === 'Aprobada') {
            setSalesDataApproved((prevSales) => [...prevSales, newSale]);
        } else {
            setSalesData((prevSales) => [...prevSales, newSale]);
        }
    };

    return (
        <SalesContext.Provider value={{ salesData, salesDataApproved, addSale }}>
            {children}
        </SalesContext.Provider>
    );
};

import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const LanguageContext = createContext<any>(null);

// El Provider: es el componente que "envuelve" la app
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<'es' | 'en'>('es');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook personalizado para usar el contexto fácilmente
export const useLanguage = () => useContext(LanguageContext);
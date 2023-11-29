import React, { useState, useEffect } from 'react';

const ChatbotFrame = () => {
    const [showChat, setShowChat] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return (
        <div>
            {showChat && (
                <iframe
                    title="chatbot"
                    src="https://web.powerva.microsoft.com/environments/Default-84c31ca0-ac3b-4eae-ad11-519d80233e6f/bots/cr5be_botHospital/webchat?__version__=2"
                    frameBorder="0"
                    style={{
                        position: "absolute",
                        top: '50%',
                        left: '50%',
                        width: '80%',
                        height: '80%',
                        maxWidth: '500px',
                        maxHeight: '600px',
                        border: 'none',
                        transform: 'translate(-50%, -50%)',
                    }}
                ></iframe>
            )}
            <button
    style={{
        position: "absolute",
        top: '10px',
        right: '10px',
        padding: isSmallScreen ? '10px' : '10px 20px',
        fontSize: '1em',
        borderRadius: isSmallScreen ? '50%' : '5px',
        border: 'none',
        color: 'white',
        backgroundColor: '#007BFF',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    }}
    onClick={() => setShowChat(!showChat)}
    onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
    onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
>
    {isSmallScreen ? (showChat ? 'X' : '+') : (showChat ? 'Cerrar chatbot' : 'Abrir chatbot')}
</button>
        </div>
    );
};

export default ChatbotFrame;
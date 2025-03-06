export function ChatButton() {
    return (
        <a 
            href="https://wa.me/919109786749" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-success d-flex align-items-center gap-2 shadow"
            style={{ 
                position: "fixed",
                bottom: "20px",
                right: "20px",
                borderRadius: "50px",
                padding: "12px 20px",
                fontSize: "16px",
                backgroundColor: "green",
                color: "white",
                zIndex: 1000 // Ensure it stays above other elements
            }}
        >
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                width="24px" 
                height="24px" 
            />
            Chat
        </a>
    );
}

"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

interface CardProps {
    children: ReactNode;
}

/**
 * A reusable component that displays a card with a white background, rounded corners, and a black border.
 * The card has a minimum width of 300px, a maximum width of 500px, and a minimum height of 200px.
 * The children of the card are centered horizontally and vertically.
 * 
 * @param {ReactNode} children - The children of the card.
 * @returns {JSX.Element} A JSX element representing the card.
 */
export function Card({ children }: CardProps): JSX.Element {
    return (
        <div className="cards-bg border-2 border-[#23283A] px-10 py-6 min-w-[300px] max-w-[500px] min-h-[200px] flex items-center justify-center rounded-lg">
            {children}
        </div>
    );
}

interface CardProps2 extends CardProps {
    bgColor?: string;
}

/**
 * A reusable component that displays a card with a white background, rounded corners, and a black border.
 * The card has a minimum width of 300px, a maximum width of 500px, and a minimum height of 200px.
 * The children of the card are centered horizontally and vertically.
 * The component accepts a bgColor prop which sets the background color of the card.
 * If bgColor is not specified, the background color defaults to #0e1018.
 * 
 * @param {ReactNode} children - The children of the card.
 * @param {CardProps2} params - Additional parameters, including bgColor.
 * @returns {JSX.Element} A JSX element representing the card.
 */
export function Card2({ children, ...params }: CardProps2): JSX.Element {
    return (
        <div
            className={`border-2 border-[#23283A] p-10 rounded-3xl w-full`}
            style={{ backgroundColor: params?.bgColor || "#0e1018" }}
        >
            {children}
        </div>
    );
}

interface StatusMessageProps {
    message: string;
    type: "error" | "success";
}

/**
 * A component that displays a status message with a colored background and icon.
 * The component is initially visible and disappears after 10 seconds.
 * The message can be either an error or success message.
 * 
 * @param {StatusMessageProps} props - The props object.
 * @param {string} props.message - The message to display.
 * @param {"error" | "success"} props.type - The type of the message.
 * @returns {React.ReactElement} A JSX element representing the status message.
 */
export const StatusMessage: React.FC<StatusMessageProps> = ({
    message,
    type,
}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 10000); // Message disappears after 10 seconds

        return () => clearTimeout(timer);
    }, []);

    const iconSrc =
        type === "error" ? "/assets/icons/problem.svg" : "/assets/icons/book.svg";

    return (
        <div
            className={`fixed top-5 right-5 p-3 rounded-md text-white flex items-center ${type === "error" ? "bg-[#E40686]" : "bg-[#5EE398]"
                } ${isVisible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
        >
            <div className="flex-shrink-0 mr-3">
                <Image src={iconSrc} alt="Icon" width={24} height={24} />
            </div>
            <div>{message}</div>
        </div>
    );
};
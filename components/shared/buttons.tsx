import { RiLoader4Line } from "react-icons/ri";

/**
 * A big button with no outline, used for submit and button types.
 *
 * @param {{ name: string; type: "submit" | "button"; disabled?: boolean; loading?: boolean; onclick?: () => void; btnColor?: string }} props
 * @prop {string} name - The text to display on the button
 * @prop {"submit" | "button"} type - The type of button
 * @prop {boolean} [disabled] - Whether the button is disabled
 * @prop {boolean} [loading] - Whether the button is loading
 * @prop {() => void} [onclick] - The function to call when the button is clicked
 * @prop {string} [btnColor] - The color of the button
 */
export function NoOutlineButtonBig({
    name,
    type,
    disabled,
    loading,
    onclick,
    btnColor,
  }: {
    name: string;
    type: "submit" | "button";
    disabled?: boolean;
    loading?: boolean;
    onclick?: () => void;
    btnColor?: string;
  }) {
    return (
      <button
        type={type}
        className={`mt-5 w-full rounded-lg py-4 flex items-center justify-center text-center px-2`}
        disabled={disabled}
        onClick={onclick}
        style={{ backgroundColor: btnColor || "#263382" }}
      >
        {loading ? <RiLoader4Line className="animate-spin text-2xl" /> : name}
      </button>
    );
  }
  
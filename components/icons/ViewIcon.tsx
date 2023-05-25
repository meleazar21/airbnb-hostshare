import { IIcon } from "@/interfaces/icon.interface";

const ViewIcon = (props: IIcon) => {
    return (
        <div style={{ maxWidth: props.width, maxHeight: props.heigth }}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 86.79" stroke="black" fill={`${props.selected ? "black" : "none"}`} className="w-6 h-6">
                <path d="M94.35,86.79l-10.8-36.06h2.8l16.3,36.06H94.35L94.35,86.79z M52.25,10.46c-0.29-0.49-0.12-1.13,0.38-1.41 c0.49-0.29,1.13-0.12,1.41,0.38l1.33,2.3c0.29,0.49,0.12,1.13-0.38,1.41c-0.49,0.29-1.13,0.12-1.41-0.38L52.25,10.46L52.25,10.46z M60.51,13.88c2.56,0,4.87,1.04,6.55,2.71c1.68,1.68,2.71,3.99,2.71,6.55c0,2.56-1.04,4.87-2.71,6.55 c-1.68,1.68-3.99,2.71-6.55,2.71c-2.56,0-4.87-1.04-6.55-2.71c-1.68-1.68-2.71-3.99-2.71-6.55c0-2.56,1.04-4.87,2.71-6.55 C55.64,14.91,57.95,13.88,60.51,13.88L60.51,13.88z M65.66,17.99c-1.32-1.32-3.14-2.13-5.15-2.13c-2.01,0-3.83,0.82-5.15,2.13 c-1.32,1.32-2.13,3.14-2.13,5.15c0,2.01,0.82,3.83,2.13,5.15c1.32,1.32,3.14,2.13,5.15,2.13c2.01,0,3.83-0.82,5.15-2.13 c1.32-1.32,2.13-3.14,2.13-5.15C67.8,21.13,66.98,19.31,65.66,17.99L65.66,17.99z M59.69,8.03c0-0.57,0.46-1.04,1.04-1.04 c0.57,0,1.04,0.46,1.04,1.04v2.66c0,0.57-0.46,1.04-1.04,1.04c-0.57,0-1.04-0.46-1.04-1.04V8.03L59.69,8.03z M67.36,9.64 c0.28-0.49,0.92-0.67,1.41-0.38c0.49,0.28,0.67,0.92,0.38,1.41l-1.33,2.3c-0.28,0.49-0.92,0.67-1.41,0.38 c-0.49-0.28-0.67-0.92-0.38-1.41L67.36,9.64L67.36,9.64L67.36,9.64z M73.19,14.87c0.49-0.29,1.13-0.12,1.41,0.38 c0.29,0.49,0.12,1.13-0.38,1.41l-2.3,1.33c-0.49,0.29-1.13,0.12-1.41-0.38c-0.29-0.49-0.12-1.13,0.38-1.41L73.19,14.87L73.19,14.87 z M75.63,22.32c0.57,0,1.04,0.46,1.04,1.04c0,0.57-0.46,1.04-1.04,1.04h-2.66c-0.57,0-1.04-0.46-1.04-1.04 c0-0.57,0.46-1.04,1.04-1.04H75.63L75.63,22.32z M74.01,29.99c0.49,0.28,0.67,0.92,0.38,1.41c-0.28,0.49-0.92,0.67-1.41,0.38 l-2.3-1.33c-0.49-0.28-0.67-0.92-0.38-1.41c0.28-0.49,0.92-0.67,1.41-0.38L74.01,29.99L74.01,29.99L74.01,29.99z M68.78,35.82 c0.29,0.49,0.12,1.13-0.38,1.41c-0.49,0.29-1.13,0.12-1.41-0.38l-1.33-2.3c-0.29-0.49-0.12-1.13,0.38-1.41 c0.49-0.29,1.13-0.12,1.41,0.38L68.78,35.82L68.78,35.82z M61.34,38.26c0,0.57-0.46,1.04-1.04,1.04c-0.57,0-1.04-0.46-1.04-1.04 V35.6c0-0.57,0.46-1.04,1.04-1.04c0.57,0,1.04,0.46,1.04,1.04V38.26L61.34,38.26z M53.67,36.64c-0.28,0.49-0.92,0.67-1.41,0.38 c-0.49-0.28-0.67-0.92-0.38-1.41l1.33-2.3c0.28-0.49,0.92-0.67,1.41-0.38c0.49,0.28,0.67,0.92,0.38,1.41L53.67,36.64L53.67,36.64 L53.67,36.64z M47.84,31.41c-0.49,0.29-1.13,0.12-1.41-0.38c-0.29-0.49-0.12-1.13,0.38-1.41l2.3-1.33 c0.49-0.29,1.13-0.12,1.41,0.38c0.29,0.49,0.12,1.13-0.38,1.41L47.84,31.41L47.84,31.41z M45.4,23.97c-0.57,0-1.04-0.46-1.04-1.04 c0-0.57,0.46-1.04,1.04-1.04h2.66c0.57,0,1.04,0.46,1.04,1.04c0,0.57-0.46,1.04-1.04,1.04H45.4L45.4,23.97z M47.02,16.3 c-0.49-0.28-0.67-0.92-0.38-1.41c0.28-0.49,0.92-0.67,1.41-0.38l2.3,1.33c0.49,0.28,0.67,0.92,0.38,1.41 c-0.28,0.49-0.92,0.67-1.41,0.38L47.02,16.3L47.02,16.3L47.02,16.3z M8.42,43c0.62-7.22,1.87-13.17,7.04-15.52 c2.54,7.67,1.11,15.05-1.53,23.28H1.06v7.31h26.83l3.06-7.31H18.69c2.3-12.84,0.73-18.03-1.12-22.69c3.19,2.01,6.03,6.33,8.75,13.2 c3.82-7.11,1.39-12.35-7.67-15.74c5.18-1.61,10.04,0.45,14.6,4.48c-2.44-9.2-9.4-11.43-15.62-6.17c0.85-6.6-1.87-8.18-5.51-9.63 c1.72,2.61,3.01,5.33,2.81,8.46c-5.62-5.16-10.3-3.25-14.62,1.29c4.14-0.97,8.43-1.38,12.06,1.05C5.88,24.19,2.25,27.85,0,32.66 c2.72-2.49,5.28-4.11,8-4.4C5.15,33.43,6.4,38,8.43,43.01L8.42,43L8.42,43z M102.72,50.75V36.47H90.96 c-1.97,0.18-2.37-1.37-1.53-2.67l7.51-8.8l-0.22-0.22h-4.02c-1.46,0.22-2-1.36-1.11-2.47l8.09-9.5h-2.36 c-1.48,0.04-1.85-1.32-0.9-2.61l7.37-8.75c0.5-0.6,1.04-1.47,1.92-1.45c0.75,0.02,1.21,0.73,1.66,1.25l7.84,9.14 c0.85,1.22,0.13,2.5-1.36,2.5h-2.12l8.03,9.42c0.96,0.95,0.47,2.48-0.64,2.69h-4.67l7,8.22l0.77,0.9c0.59,0.67,0.29,2.2-0.97,2.35 h-12.62v14.28h14.24v7.31h-27.2l-3.05-7.31H102.72L102.72,50.75z M38.74,86.79l6.77-36.06h-3.33L31.39,86.79H38.74L38.74,86.79z M27.82,86.79l10.8-36.06h-2.8l-16.3,36.06H27.82L27.82,86.79z M62.81,86.79l0-36.06h3.39l3.38,36.06H62.81L62.81,86.79z M73.29,86.79l-3.75-36.06h3.39l7.13,36.06H73.29L73.29,86.79z M83.44,86.79l-6.77-36.06H80l10.79,36.06H83.44L83.44,86.79z M59.37,86.79l0-36.06h-3.39l-3.38,36.06H59.37L59.37,86.79z M48.88,86.79l3.75-36.06h-3.39l-7.13,36.06H48.88L48.88,86.79z M1.06,75.8h18.79l-4.98,10.99H1.06V75.8L1.06,75.8z M103.69,75.8h19.19v10.99h-14.23L103.69,75.8L103.69,75.8z M1.06,63.19h24.5 l-3.39,7.47H1.06V63.19L1.06,63.19z M98,63.19h24.88v7.47h-21.51L98,63.19L98,63.19z" />
            </svg>
        </div>
    )
}

export default ViewIcon;
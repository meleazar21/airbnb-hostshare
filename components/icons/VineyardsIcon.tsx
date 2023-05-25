import { IIcon } from "@/interfaces/icon.interface";

const VineyardsIcon = (props: IIcon) => {
    return (
        <div style={{ maxWidth: props.width, maxHeight: props.heigth }}>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 80.02 122.88" stroke="black" fill={`${props.selected ? "black" : "none"}`} className="w-6 h-6">
                <path d="M46.2,94.47c0.92,0.41,1.79,0.92,2.61,1.5c1.15,0.45,2.41,0.7,3.73,0.7c2.81,0,5.36-1.14,7.21-2.98 c1.84-1.84,2.98-4.39,2.98-7.21s-1.14-5.36-2.98-7.21c-1.84-1.84-4.39-2.98-7.21-2.98c-2.81,0-5.36,1.14-7.21,2.98 c-1.84,1.84-2.99,4.39-2.99,7.21c0,2.81,1.14,5.36,2.98,7.21C45.6,93.96,45.89,94.22,46.2,94.47L46.2,94.47z M35.9,31.58 c-0.12-0.86-0.2-1.7-0.27-2.52c-0.02-0.23-0.03-0.46-0.04-0.68c-7.39,0.74-16.97-3.8-21.81-9.17C9.55,14.52,7.74,8.39,6.95,0.03 c3.06-0.12,6.11,0.08,9.17,0.81c11.73,2.78,18.16,12.45,19.44,23.8c0.23-5.05,1.58-9.31,3.8-12.74c2.9-4.48,7.24-7.49,12.5-8.95 c1.73-0.48,3.54-0.79,5.41-0.93c1.54-0.11,2.88,1.04,3,2.58c0.11,1.54-1.04,2.88-2.58,3c-1.54,0.12-2.99,0.36-4.34,0.73 c-3.95,1.1-7.18,3.32-9.31,6.61c-2.19,3.38-3.26,7.96-2.84,13.71c0.12,1.63,0.36,3.33,0.73,5.12c0.19-0.22,0.39-0.43,0.6-0.64 c2.57-2.57,6.13-4.16,10.05-4.16c3.92,0,7.48,1.59,10.05,4.16c2.57,2.57,4.16,6.13,4.16,10.05c0,2.46-0.62,4.77-1.72,6.78l0.09,0 c4.1,0,7.81,1.66,10.5,4.35c2.69,2.69,4.35,6.4,4.35,10.5c0,4.1-1.66,7.81-4.35,10.5c-2.68,2.68-6.4,4.34-10.5,4.34v0.01l-0.16,0 c1.11,2.02,1.74,4.35,1.74,6.82c0,3.92-1.59,7.48-4.16,10.05c-2.46,2.46-5.82,4.02-9.54,4.15c1.23,2.17,1.94,4.67,1.94,7.34v0v0 c0,4.1-1.66,7.81-4.35,10.5c-2.68,2.68-6.4,4.34-10.5,4.34v0.01h0c-4.1,0-7.81-1.66-10.5-4.35c-2.69-2.69-4.35-6.4-4.35-10.5v0 c0-2.77,0.76-5.36,2.08-7.58c-3.73-0.13-7.09-1.69-9.56-4.15c-2.57-2.57-4.16-6.13-4.16-10.05c0-2.32,0.56-4.52,1.55-6.46 c-0.11,0-0.22,0-0.34,0c-4.1,0-7.81-1.66-10.5-4.35C1.66,72.75,0,69.03,0,64.93c0-4.1,1.66-7.81,4.35-10.5 c2.69-2.69,6.4-4.35,10.5-4.35c0.08,0,0.16,0,0.24,0c-1.21-2.09-1.9-4.51-1.9-7.1c0-3.92,1.59-7.48,4.16-10.05 c2.57-2.57,6.13-4.16,10.05-4.16C30.59,28.77,33.53,29.81,35.9,31.58L35.9,31.58z M27.53,57.19c0.19,0.31,0.37,0.63,0.54,0.96 c0.22-0.35,0.45-0.69,0.7-1.02C28.36,57.17,27.95,57.19,27.53,57.19L27.53,57.19z M23.45,77.04c-0.56,0.4-1.15,0.76-1.76,1.08 c-0.37,0.28-0.72,0.59-1.05,0.91c-1.84,1.84-2.98,4.39-2.98,7.21c0,2.81,1.14,5.36,2.98,7.21c1.84,1.84,4.39,2.98,7.21,2.98 c1.58,0,3.07-0.36,4.41-1c0.38-0.23,0.76-0.45,1.16-0.65c0.59-0.39,1.14-0.83,1.64-1.33c1.84-1.84,2.98-4.39,2.98-7.21 c0-2.81-1.14-5.36-2.98-7.21c-1.84-1.84-4.39-2.98-7.21-2.98C26.28,76.05,24.78,76.41,23.45,77.04L23.45,77.04z M22.38,57.4 c-1.93-1.93-4.59-3.12-7.53-3.12c-2.94,0-5.6,1.19-7.53,3.12c-1.93,1.93-3.12,4.59-3.12,7.53c0,2.94,1.19,5.6,3.12,7.53 c1.93,1.93,4.59,3.12,7.53,3.12c2.94,0,5.6-1.19,7.53-3.12c1.93-1.93,3.12-4.59,3.12-7.53C25.5,61.99,24.31,59.33,22.38,57.4 L22.38,57.4z M39.95,49.68c-0.39,0.72-0.83,1.41-1.34,2.05c0.34-0.03,0.69-0.04,1.04-0.04c0.55,0,1.09,0.03,1.63,0.1 C40.78,51.13,40.33,50.43,39.95,49.68L39.95,49.68z M34.62,35.78c-1.84-1.84-4.39-2.98-7.21-2.98c-2.81,0-5.36,1.14-7.21,2.98 c-1.84,1.84-2.98,4.39-2.98,7.21c0,2.81,1.14,5.36,2.98,7.21c1.84,1.84,4.39,2.98,7.21,2.98h0c2.81,0,5.36-1.14,7.21-2.98 c1.84-1.84,2.98-4.39,2.98-7.21v0C37.6,40.17,36.46,37.62,34.62,35.78L34.62,35.78z M52.3,57.39c-0.57-0.01-1.13-0.06-1.68-0.13 c0.36,0.48,0.68,0.99,0.97,1.52C51.81,58.3,52.04,57.84,52.3,57.39L52.3,57.39z M59.79,35.97c-1.84-1.84-4.39-2.99-7.21-2.99 c-2.81,0-5.36,1.14-7.21,2.99c-1.84,1.84-2.98,4.39-2.98,7.21v0h-0.01c0,2.81,1.14,5.36,2.99,7.21c1.84,1.84,4.39,2.98,7.21,2.98h0 c1.69,0,3.28-0.41,4.69-1.14c0.28-0.18,0.57-0.35,0.87-0.5c0.6-0.39,1.15-0.84,1.65-1.34c1.84-1.84,2.98-4.39,2.98-7.21 C62.78,40.36,61.64,37.82,59.79,35.97L59.79,35.97z M52.32,72.27c-0.17-0.3-0.34-0.61-0.49-0.92c-0.16,0.33-0.34,0.66-0.53,0.97 C51.64,72.29,51.98,72.27,52.32,72.27L52.32,72.27z M72.7,57.28c-1.93-1.93-4.59-3.12-7.53-3.12c-2.94,0-5.6,1.19-7.53,3.12 c-1.93,1.93-3.12,4.59-3.12,7.53c0,2.94,1.19,5.6,3.12,7.53c1.93,1.93,4.59,3.12,7.53,3.12v0.01c2.94,0,5.6-1.2,7.53-3.13 c1.93-1.93,3.12-4.59,3.12-7.53C75.82,61.87,74.63,59.21,72.7,57.28L72.7,57.28z M40.53,78.87c-0.17,0.01-0.34,0.02-0.5,0.02 c0.08,0.14,0.16,0.27,0.24,0.41C40.35,79.16,40.43,79.01,40.53,78.87L40.53,78.87z M46.55,58.4c-1.76-1.76-4.2-2.86-6.9-2.86 c-2.69,0-5.13,1.09-6.9,2.86c-1.76,1.76-2.86,4.2-2.86,6.9s1.09,5.13,2.86,6.9c1.76,1.76,4.2,2.86,6.9,2.86 c2.69,0,5.13-1.09,6.9-2.86c1.77-1.77,2.86-4.21,2.86-6.9H49.4C49.4,62.6,48.31,60.16,46.55,58.4L46.55,58.4z M45.7,98.95 c-0.17-0.1-0.34-0.19-0.51-0.3c-1.5-0.81-3.22-1.27-5.05-1.27h0h0v-0.01c-2.93,0-5.6,1.2-7.53,3.13c-1.93,1.93-3.12,4.59-3.12,7.53 v0c0,2.94,1.19,5.6,3.12,7.53c1.93,1.93,4.59,3.12,7.53,3.12h0v0.01c2.94,0,5.6-1.2,7.53-3.13c1.93-1.93,3.12-4.59,3.12-7.53v0v0 c0-2.94-1.19-5.6-3.12-7.53C47.07,99.91,46.41,99.39,45.7,98.95L45.7,98.95z" />
            </svg>
        </div>
    )
}

export default VineyardsIcon;
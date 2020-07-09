import React from 'react';

const pizza = ({fill, width = '30px'}) => {
    return (
      <svg
        viewBox="0 0 512 512"
        width={width}
      >
        <g>
          <path fill={fill} d="m512 383.541-.772-12.458c-2.975-48.023-14.428-94.406-34.039-137.861-19.652-43.545-46.972-82.98-81.201-117.209-34.229-34.23-73.664-61.549-117.209-81.202-43.455-19.611-89.839-31.064-137.862-34.039l-12.458-.772-128.459 512zm-360.535-351.809c84.177 8.108 163.058 45.294 223.284 105.52 60.226 60.227 97.411 139.107 105.519 223.284l-61.408 15.407c1.003-3.449 2.134-6.986 3.286-10.589 5.485-17.149 11.156-34.883 6.3-52.992-5.043-18.808-19.777-32.091-32.776-43.81-8.372-7.548-16.28-14.677-20.571-22.083-4.421-7.628-6.717-18.191-9.147-29.375-3.683-16.945-7.857-36.151-21.377-49.671-13.521-13.52-32.726-17.694-49.671-21.376-11.183-2.43-21.746-4.726-29.375-9.147-7.406-4.291-14.535-12.199-22.083-20.571-11.719-12.999-25.002-27.732-43.809-32.775-4.833-1.296-9.639-1.842-14.415-1.842-13.118 0-26.004 4.121-38.577 8.142-3.602 1.152-7.14 2.284-10.589 3.286zm-59.607 237.575c14.851 7.405 23.258 24.455 19.223 41.158-2.284 9.458-8.115 17.46-16.418 22.532-6.142 3.752-13.092 5.563-20.122 5.33zm-24.718 98.52c2.886.379 5.776.575 8.656.575 12.077 0 23.958-3.316 34.526-9.772 15.15-9.255 25.788-23.855 29.956-41.111 4.12-17.058 1.417-34.737-7.611-49.781-7.77-12.948-19.471-22.674-33.405-27.937l28.599-113.988c9.575-1.485 18.866-4.448 27.936-7.349 13.616-4.355 26.48-8.468 36.063-5.897 10.227 2.742 19.482 13.008 29.28 23.876 8.77 9.728 17.839 19.787 29.331 26.447 11.705 6.784 25.101 9.695 38.056 12.51 14.158 3.076 27.53 5.983 34.811 13.264 7.281 7.282 10.188 20.654 13.264 34.811 2.815 12.955 5.727 26.351 12.51 38.056 6.66 11.492 16.719 20.561 26.447 29.331 10.868 9.798 21.134 19.053 23.876 29.281 2.57 9.586-1.542 22.446-5.897 36.062-2.901 9.07-5.864 18.361-7.349 27.936l-107.016 26.85c-6.4-13.287-16.567-24.4-29.553-32.07-17.352-10.25-37.657-13.128-57.175-8.107-19.364 4.983-35.679 17.176-45.939 34.335-7.647 12.788-11.271 27.234-10.65 41.8l-94.516 23.714zm181.832 50.74-82.88 20.794c1.891-18.392 15.001-34.613 33.836-39.46 11.749-3.024 23.969-1.29 34.414 4.879 5.942 3.51 10.9 8.219 14.63 13.787z" />
          <path fill={fill} d="m239.746 345.773c40.538 0 73.519-32.981 73.519-73.519s-32.981-73.519-73.519-73.519-73.519 32.981-73.519 73.519 32.981 73.519 73.519 73.519zm0-117.002c23.977 0 43.483 19.506 43.483 43.483s-19.506 43.483-43.483 43.483-43.483-19.506-43.483-43.483 19.507-43.483 43.483-43.483z" />
          <path fill={fill} d="m148.74 164.819h28.701v30.036h-28.701z" />
          <path fill={fill} d="m312.176 339.529h28.701v30.036h-28.701z" />
          <path fill={fill} d="m86.762 395.869h28.701v30.036h-28.701z" />
        </g>
      </svg>
    )
}

export default pizza;

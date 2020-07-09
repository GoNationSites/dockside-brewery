import React from 'react';

const star = ({ width, fill = "#C3BDB7" }) => {
  return (
    <svg width={width} viewBox="0 0 144 144">
      <path
        fill={fill}
        class="st1"
        d="M85.4,78.2c7-0.2,14-0.5,21-1c11.4-0.9,22.7-2.1,34.1-4.4c-11.4-2.4-22.7-3.6-34.1-4.4c-7-0.5-14-0.8-21-1
	c4.8-5.1,9.6-10.2,14.2-15.5c7.4-8.7,14.6-17.6,21-27.3c-9.7,6.4-18.6,13.6-27.3,21c-5.3,4.6-10.5,9.3-15.5,14.2c-0.2-7-0.5-14-1-21
	c-0.9-11.4-2.1-22.7-4.4-34.1c-2.4,11.4-3.6,22.7-4.4,34.1c-0.5,7-0.8,14-1,21.1c-5.1-4.8-10.3-9.6-15.6-14.2
	c-8.7-7.4-17.6-14.6-27.2-21c6.4,9.7,13.6,18.6,21,27.2c4.6,5.3,9.4,10.5,14.2,15.6c-7,0.2-14.1,0.5-21.1,1
	C26.8,69.2,15.4,70.4,4,72.7c11.4,2.3,22.7,3.5,34.1,4.4c7,0.5,14.1,0.8,21.1,1c-4.8,5.1-9.6,10.3-14.2,15.6
	c-7.4,8.7-14.6,17.6-21,27.2c9.7-6.4,18.6-13.6,27.2-21c5.3-4.6,10.5-9.4,15.6-14.2c0.2,7,0.5,14.1,1,21.1
	c0.9,11.4,2.1,22.7,4.4,34.1c2.3-11.4,3.5-22.7,4.4-34.1c0.5-7,0.8-14,1-21c5.1,4.8,10.2,9.6,15.6,14.2c8.7,7.4,17.6,14.6,27.3,21
	c-6.4-9.7-13.5-18.6-21-27.3C94.9,88.4,90.2,83.3,85.4,78.2"
      />
    </svg>
  )
}

export default star;

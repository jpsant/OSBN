import React from 'react';
import './css/youtube.css';

const Youtube = (props) => {
    return (
        <>
        <svg version="1.1" className={props.show ? 'ytIn' : 'ytOut'} id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="-223 25 512 512" style={{enableBackground:'new -223 25 512 512'}} space="preserve">

<a href={props.show ? null : null}> 
<path id="red-fill" className={props.show ? 'fillAccordionIn' : 'fillAccordionOut'} fill="#FF5A5A" d="M268.7,160.7c-5.7-21.5-22.3-38.5-43.5-44.2C186.9,106,72.3,106,33,106s-153.9,0-192.2,10.4
	c-21.2,5.8-37.8,22.7-43.5,44.2C-213,199.6-213,281-213,281s0,81.4,10.3,120.3c5.7,21.5,22.3,38.5,43.5,44.2
	C-120.9,456-25,456,33,456s153.9,0,192.2-10.4c21.2-5.8,37.8-22.7,43.5-44.2C279,362.4,279,281,279,281S279,199.6,268.7,160.7z"/>
<path  className={props.show ? 'youtubeStrokeIn' : 'youtubeStrokeOut'} id="path_4_" d="M35.5,116C35.5,116,35.5,116,35.5,116l-0.8,0c-5.5,0-10-4.5-10-10c0,0,0,0,0,0c0-5.5,4.5-10,10-10c0,0,0,0,0,0
	l0.7,0c5.5,0,10,4.5,10,10c0,0,0,0,0,0C45.5,111.5,41,116,35.5,116z"/>
<path  className={props.show ? 'youtubeStrokeIn' : 'youtubeStrokeOut'} id="path_3_" d="M33,466c-6.3,0-155.6-0.1-194.8-10.8c-24.6-6.7-44-26.3-50.5-51.3C-222.9,364.1-223,284.4-223,281
	s0.1-83.1,10.6-122.9c6.6-25,25.9-44.6,50.5-51.3c25.9-7.1,98.8-9.6,155.3-10.4c5.5,0,10.1,4.3,10.2,9.8c0.1,5.5-4.3,10.1-9.8,10.2
	c-78.3,1.2-131.8,4.7-150.4,9.7c-17.7,4.8-31.7,19-36.5,37.1c-9.8,37.3-10,117-10,117.8c0,0.8,0.1,80.5,9.9,117.8
	c4.8,18.1,18.7,32.3,36.4,37.1C-119.9,445.9,31.5,446,33,446s152.9-0.1,189.6-10.1c17.7-4.8,31.7-19,36.5-37.1
	c9.8-37.3,10-117,10-117.8c0-0.8-0.1-80.5-10-117.8c-4.8-18.1-18.7-32.3-36.5-37.1c-18.2-5-70.1-8.4-146.1-9.7
	c-5.5-0.1-9.9-4.6-9.8-10.2s4.7-9.9,10.2-9.8c54.9,0.9,125.6,3.5,151,10.4c24.6,6.7,44,26.3,50.5,51.3
	C288.9,197.9,289,277.6,289,281s-0.1,83.1-10.6,122.9c-6.6,25-25.9,44.6-50.5,51.3C188.6,465.9,39.3,466,33,466z"/>
<polygon id="white-fill" className={props.show ? 'fillAccordionIn' : 'fillAccordionOut'} fill="#FFFFFF" points="-14.9,210.5 109.1,282.5 -14.9,354.5 "/>
<path  className={props.show ? 'youtubeStrokeIn' : 'youtubeStrokeOut'} id="path_2_" d="M-165,356c-5.5,0-10-4.5-10-10v-81.5c0-5.5,4.5-10,10-10s10,4.5,10,10V346C-155,351.5-159.5,356-165,356z"/>
<path  className={props.show ? 'youtubeStrokeIn' : 'youtubeStrokeOut'} id="path_1_" d="M-165,229.1c-5.5,0-10-4.5-10-10V219c0-5.5,4.5-10,10-10s10,4.5,10,10v0.1C-155,224.7-159.5,229.1-165,229.1z"
	/>
<path  className={props.show ? 'youtubeStrokeIn' : 'youtubeStrokeOut'} id="path" d="M-14.9,364.5c-1.7,0-3.4-0.4-5-1.3c-3.1-1.8-5-5.1-5-8.7v-144c0-3.6,1.9-6.9,5-8.7c3.1-1.8,6.9-1.8,10,0l124,72
	c3.1,1.8,5,5.1,5,8.6s-1.9,6.9-5,8.6l-124,72C-11.4,364.1-13.2,364.5-14.9,364.5z M-4.9,227.9v109.3l94.1-54.6L-4.9,227.9z"/>
    </a>
</svg>

        </>
    );
}

export default Youtube;
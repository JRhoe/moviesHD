import React, { useState } from 'react';

const Cert = () => {
    const [certActive, setCertActive] = useState(false)
    return (
        <>
            <button className="cert" onClick={() => setCertActive((prev) => !prev)}>
                <i className="fa-solid fa-stamp"></i>
            </button>
            {certActive &&
                <div className='cert__active'>
                <div className="cert__active cert__contianer">
                    <a
                        href="https://www.freepik.com/free-vector/friends-watching-horror-movie_7732623.htm#query=watching%20movie&position=6&from_view=keyword&track=ais_user&uuid=0b1977fc-be65-40d9-8853-28c452aa06b7" target="_blank"
                        >Image by pch.vector</a
                    >
                    on Freepik
                    <br />
                    <a
                        href="https://www.freepik.com/free-photo/cinema-seats-still-life_4194064.htm#fromView=search&page=1&position=7&uuid=3a0586f8-f687-46df-9a08-d29383add900" target="_blank"
                        >Image by freepik</a
                    >
                    <br />
                    <a
                        href="https://www.freepik.com/free-vector/people-watching-movie-home_8398777.htm#query=watching%20movie&position=3&from_view=keyword&track=ais_user&uuid=6e29f7c2-92ea-422c-af50-d9d487cb9356" target="_blank"
                        >Image by freepik</a
                    >
                </div>
                </div>
            }
        </>
    );
}

export default Cert;
